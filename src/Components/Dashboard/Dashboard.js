import React, { useState } from 'react';
import { Switch, Route } from "react-router";
import Sidebar from '../Sidebar/Sidebar'; 

import ProductsList from '../Dashboard/ProductsList';


const Dashboard = () => {

  return (
    <>
        <Sidebar />
        <Switch>
            <Route path="/ProductsList">
                <ProductsList />
            </Route>
        </Switch>
    </>
  );
};

export default Dashboard;