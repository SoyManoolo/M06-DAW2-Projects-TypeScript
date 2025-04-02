import { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";

import { ModelObject } from "../../models/ModelObject";
import { ModelData } from "../../models/ModelData";

import "./Home.css";

const API_URL = "http://192.168.236.234:8080/objects"; //S'ha de canviar localhost per la IP correcte

function Home() {
	const [objects, setObjects] = useState<ModelObject[]>([]); //Lista dels objectes a mostrar
	const [newObject, setNewObject] = useState<string>(""); //Control de l'input de les dades d'objecte
	const [objectId, setObjectId] = useState<string>(""); //Control de l'input de ID

	useEffect(() => {
		fetchObjects();
	}, []);

	const fetchObjects = async () => {
		//TODO Recuperar tots els objectes amb axios
		try {
			// Petició GET a l'API per obtenir tots els objectes
			const response = await axios.get(API_URL);
			// Transformar la resposta en un array d'objectes ModelObject
			const transformedData = await response.data.map((obj: any) => {
				const modelData = new ModelData(
					obj.data.photo,
					obj.data.description,
					obj.data.price
				);

				// Retornar un nou objecte ModelObject amb les dades transformades
				return new ModelObject(
					obj.name,
					modelData,
					obj.id
				);
			});
			// Actualitzar l'estat amb els objectes transformats
			setObjects(transformedData);
		} catch (error) {
			console.error(error);
		}
	};

	const fetchObjectById = async () => {
		//TODO Recuperar un objecte per ID amb fetch
		try {
			// Petició GET a l'API per obtenir un objecte per ID
			const response = await fetch(API_URL + "/" + objectId);
			// Guardar la resposta com a JSON
			const obj = await response.json();

			// Crear una array per guardar l'objecte
			const arrayModel: ModelObject[] = [];

			// Transformar la resposta en un objecte ModelData
			const modelData = new ModelData(
				obj.data.photo,
				obj.data.description,
				obj.data.price
			);

			// Crear un nou objecte ModelObject amb les dades transformades
			const modelObject = new ModelObject(
				obj.data.id,
				modelData,
				obj.data.name
			);

			// Afegir l'objecte a la array
			arrayModel.push(modelObject);
			// Actualitzar l'estat amb l'objecte recuperat
			setObjects(arrayModel);
		} catch (error) {
			console.error(error);
		}
	};

	const createObject = async () => {
		//TODO Crear un objecte per ID amb axios
		try {
			// Comprovar si l'input és vàlid
			if (!newObject || newObject.trim().split(",").length < 4) {
				alert("Introdueix un objecte vàlid amb nom, foto, descripció i preu.");
				return;
			}
			// Separar les dades de l'input
			const data: string[] = newObject.split(",");
			// Comprovar si hi ha les dades necessàries
			const myNewObject: ModelObject = {
				name: data[0]?.trim(),
				data: new ModelData(data[1]?.trim(), data[2]?.trim(), Number(data[3]?.trim()))
			};
			// Petició POST a l'API per crear un nou objecte
			await axios.post(API_URL, myNewObject);
			// Actualitzar l'estat amb els objectes recuperats
			await fetchObjects();
		} catch (error) {
			console.error(error);
		}
	};

	const updateObject = async (id: string) => {
		//TODO Actualitzar un objecte per ID amb fetch
		try {
			// Comprovar si hi ha contingut a l'input
			if (!id.trim()) {
				alert("Introdueix data per actualitzar l'objecte.");
				return;
			}
			// Ficar les dades de l'input
			const data: string[] = newObject.split(",");

			// Comprovar si hi ha les dades necessàries
			if (!data || data.length < 4) return;

			// Separar les dades de l'input
			const objectToUpdate = {
				name: data[0]?.trim() || "",
				data: {
					photo: data[1]?.trim() || "",
					description: data[2]?.trim() || "",
					price: Number(data[3]?.trim()) || 0,
				},

			};
			// Petició PUT a l'API per actualitzar l'objecte
			await fetch(API_URL + "/" + id, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(objectToUpdate),
			});
			// Actualitzar l'estat amb els objectes recuperats
			await fetchObjects();
		} catch (error) {
			console.error(error);
		}
	};

	const deleteObject = async (id: string) => {
		//TODO Eliminar un objecte per ID amb fetch o axios
		try {
			await axios.delete(API_URL + "/" + id);
			setObjects(prev => prev.filter(obj => obj.id !== id));
			await fetchObjects();
		} catch (error) {
			console.error(error);
		}
	};

	//Actualitzar el valor de l'objecte de l'input
	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setNewObject(e.target.value);
	};

	//Actualitzar el valor de l'ID de l'input
	const handleIdChange = (e: ChangeEvent<HTMLInputElement>) => {
		setObjectId(e.target.value);
	};

	return (
		<div className="container">
			<h1>Online Store</h1>
			<div className="input-group">
				<input
					type="text"
					placeholder="Nom, foto, descripció, preu"
					value={newObject}
					onChange={handleInputChange}
				/>
				<button onClick={createObject}>Crear producte</button>
			</div>
			<div className="input-group">
				<input
					type="text"
					placeholder="ID producte"
					value={objectId}
					onChange={handleIdChange}
				/>
				<button onClick={fetchObjectById}>Buscar per ID</button>
			</div>
			<button className="refresh-btn" onClick={fetchObjects}>
				Mostrar tots els productes
			</button>
			<div className="object-list">
				{objects.map((obj) => (
					<div key={obj.id} className="object-card">
						<img src={obj.data.photo} alt={obj.name} className="object-photo" />
						<div className="object-details">
							<h2>{obj.name}</h2>
							<p>{obj.data.description}</p>
							<p className="object-price">{obj.data.getFormattedPrice()}</p>
							<button onClick={() => updateObject(obj.id!)}>Actualitzar</button>
							<button
								className="delete-btn"
								onClick={() => deleteObject(obj.id!)}
							>
								Eliminar
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Home;
