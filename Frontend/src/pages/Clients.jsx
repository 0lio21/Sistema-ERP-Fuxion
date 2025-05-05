import { useEffect, useState } from "react";
import { getClients } from "../services/api";

function Clients(){
    const [clients, setclients] = useState([]);

    useEffect(() => {
        getClients().then(setclients);
    }, []);
    return (
        <div>
            <h2>Clientes</h2>
            <ul>
                {clients.map((client) => (
                    <li key={client.client_id}>{client.client_name}</li>
                ))}
            </ul>
        </div>
    );
}
export default Clients;