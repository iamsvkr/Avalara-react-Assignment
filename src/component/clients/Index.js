import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import AddClient from "./AddClient";
import ClientList from "./List";
import { getSingleStore } from "../../helpers/localForage";

export default function Index() {
  const [clientList, setClientList] = useState([]);

  const updateClients = (data) => {
    const clients = [...clientList];
    clients.push(data);
    setClientList(clients);
  };

  useEffect(() => {
    (async () => {
      const clientData = await getSingleStore("client");
      setClientList(clientData.client || []);
    })();
  }, []);

  return (
    <>
      <Grid item md={4}>
        <AddClient updateClients={updateClients} />
      </Grid>
      <Grid item md={6}>
        <ClientList clientList={clientList} />
      </Grid>
    </>
  );
}
