import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React, { useState } from "react";
import { SmallTitle, Status, Tuile, TuileSeparator } from "../components/Tuile";

const stories = storiesOf("Tuile", module);


stories.add("default", () => {
    return (
        <Tuile
            title="Agence commerciale Parisot"
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Tianwen-1_launch_04_%28cropped%29.jpg/1024px-Tianwen-1_launch_04_%28cropped%29.jpg"
            status={Status.published}
        >
            <div style={{ margin: "20px" }}>
                <SmallTitle title="Annonce" />
                Appartements neuf à vendre
            </div>
            <TuileSeparator />
            <div style={{ margin: "20px" }}>
                <SmallTitle title="Tranches commerciales" />
                0
            </div>
            <TuileSeparator />
            <div style={{ margin: "20px" }}>
                <SmallTitle title="Tranches commerciales" />
                0
            </div>
            <TuileSeparator />
            <div style={{ margin: "20px" }}>
                <SmallTitle title="Tranches commerciales" />
                0
            </div>
        </Tuile>
    );
});

stories.add("no image", () => {
    return (
        <Tuile
            title="LOT N° C3 00 750"
            status={Status.signed}
            subTitle="Parking sous sol"
        >
            <div style={{ margin: "20px", display: "flex" }}>
                <div style={{ width: "50%" }}>
                    <SmallTitle title="Prix global" />
                    <span style={{ fontSize: "1.5em", fontWeight: "bold" }}>10 000 €</span>
                </div>
                <div style={{ width: "50%" }}>
                    <SmallTitle title="Surface" />
                    <span style={{ fontSize: "1.5em", fontWeight: "bold" }}>15m²</span>
                </div>
            </div>
            <TuileSeparator />
            <div style={{ margin: "20px" }}>
                <SmallTitle title="NB d'annonces rattachées" />
                <div style={{ display: "flex", marginTop: "10px" }}>
                    <div style={{ width: "50%" }}>
                        N/A
                </div>
                    <div style={{ width: "50%" }}>
                        N/A
                </div>
                </div>
            </div>
            <div style={{ margin: "20px", display: "flex" }}>
                <div style={{ width: "50%" }}>
                    <SmallTitle title="TC associée" />
                    Aucune
                </div>
                <div style={{ width: "50%" }}>
                    <SmallTitle title="Bloc associé" />
                    <span style={{ color: "#d19d48" }}>BAT A - Accession</span>
                </div>
            </div>
        </Tuile>
    );
});