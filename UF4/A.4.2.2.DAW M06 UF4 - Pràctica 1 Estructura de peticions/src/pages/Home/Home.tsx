import { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";

import { ModelObject } from "../../models/ModelObject";
import { ModelData } from "../../models/ModelData";

import "./Home.css";
import { data } from "react-router-dom";

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
			const response = await axios.get(API_URL);
			console.log(response.data);
			const transformedData = await response.data.map((obj: any) => {
				const modelData = new ModelData(
					obj.data.photo,
					obj.data.description,
					obj.data.price
				);

				return new ModelObject(obj.name, modelData, obj.id);
			});
			setObjects(transformedData);
		} catch (error) {
			console.error(error);
		}
	};

	const fetchObjectById = async () => {
		//TODO Recuperar un objecte per ID amb fetch
		const response = await fetch(API_URL + "/" + objectId);
		const obj = await response.json()

		const arrayModel: ModelObject[] = [];

		const modelData = new ModelData(
			obj.data.photo,
			obj.data.description,
            obj.data.price
		);

		const modelObject = new ModelObject(
			obj.data.id,
			modelData,
			obj.data.name
		);

		arrayModel.push(modelObject);
		setObjects(arrayModel);
	};

	const createObject = async () => {
		//TODO Crear un objecte per ID amb axios
	};

	const updateObject = async (id: string) => {
		//TODO Actualitzar un objecte per ID amb fetch
	};

	const deleteObject = async (id: string) => {
		//TODO Eliminar un objecte per ID amb fetch o axios
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
