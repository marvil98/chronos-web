"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { Container, Typography } from "@mui/material";
import { FormShow } from "./form-show";
import { FormEdit } from "./form-edit";
import { PopUp } from "@/components/pop-up";
import { PopUpWarning } from "@/components/pop-up-warning";
import checkImage from '@/assets/check-ico.svg';

export default function MyProfile() {
    const [showFormShow, setShowFormShow] = useState(true);
    const [showPopUp, setShowPopUp] = useState(false);
    const [showWarning, setShowWarning] = useState(false);
    const [varPopUpWarning, setVarPopUpWarning] = useState({ image: checkImage, text: '' });

    const chageFormShow = () => {
        setShowFormShow(!showFormShow);
    };

    const showPopUpConfirmDelete = () => {
        setShowPopUp(!showPopUp);
    };

    const handleDeleteAccount = () => {
        showPopUpConfirmDelete();
        setVarPopUpWarning({ image: checkImage, text: 'CUENTA ELIMINADA EXITOSAMENTE' });
        setShowWarning(true);
    }

    const handleEditAccount = () => {
        setVarPopUpWarning({ image: checkImage, text: 'CUENTA EDITADA EXITOSAMENTE' });
        setShowWarning(true);
        chageFormShow();
    }

    return (
        <>
            <PopUp isOpen={showPopUp} message='¿Deseas eliminar tu cuenta?' isTwoButtons={true}
                btnOneText='ELIMINAR' btnTwoText='CANCELAR' handleClickPrimary={handleDeleteAccount}
                handleClickSecondary={showPopUpConfirmDelete} />
            <PopUpWarning isOpen={showWarning} message={varPopUpWarning.text} image={varPopUpWarning.image}
                setShowWarning={setShowWarning} />
            <Navbar backTo="/" />
            <Container sx={{ mt: "25px !important" }}>
                <Typography variant="h1">MI PERFIL</Typography>
                {showFormShow ?
                    <FormShow userName="Nombre usuario" userEmail="correo@correo.com"
                        handleClickDelete={showPopUpConfirmDelete} handleClickEdit={chageFormShow} />
                    : <FormEdit handleClickSaveEdit={handleEditAccount} />
                }
            </Container>
        </>
    );
}