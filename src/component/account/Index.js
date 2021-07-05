import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import AddAccount from "./AddAccount";
import AccountList from "./AccountList";
import { getSingleStore } from "../../helpers/localForage";

export default function Index() {
  const [accountList, setAccountList] = useState([]);

  const updateAccounts = (data) => {
    const accounts = [...accountList];
    accounts.push(data);
    setAccountList(accounts);
  };

  useEffect(() => {
    (async () => {
      const accountData = await getSingleStore("account");
      if (accountData.account) {
        setAccountList(accountData.account);
      }
    })();
  }, []);

  return (
    <>
      <Grid item md={4}>
        <AddAccount updateAccounts={updateAccounts} />
      </Grid>
      <Grid item md={6}>
        <AccountList accountList={accountList} />
      </Grid>
    </>
  );
}
