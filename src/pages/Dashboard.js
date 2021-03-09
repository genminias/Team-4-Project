import React, { useState, useEffect } from "react";
import { navigate } from "@reach/router";

import { notion, useNotion } from "../services/notion";
import { Nav } from "../components/Nav";
import { Player } from "../components/Player";

export function Dashboard() {
    const { user } = useNotion();

    useEffect(() => {
        if (!user) {
          navigate("/login");
        }
      }, [user]);
    
      return (
        <main className="dashboard">
          <h1>hi buddy</h1>
          {user ? <Nav /> : null}
        </main>
      );
}