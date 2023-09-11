import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../paginas/Login/Login";
import Cadastro from "../paginas/Cadastro/Cadastro";
import PgPrincipal from "../paginas/PgPrincipal/PgPrincipal";
import Tabela from "../paginas/Tabela/Tabela";
import Projeto from "../paginas/Projeto/Projeto";
import Pesquisar from "../paginas/Pesquisar/Pesquisar";
import Perfil from "../paginas/Perfil/Perfil";
import Informativo from "../paginas/Informativo/Informativo";
import Favoritos from "../paginas/Favoritos/Favoritos";
import Comunicacao from "../paginas/Comunicacao/Comunicacao";
import Add from "../paginas/Add/Add";

function Rotas() {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Login/>}/>
                <Route element={<Cadastro/>} path="/Cadastro"/>
                <Route element={<PgPrincipal/>} path="/PgPrincipal"/>
                <Route element={<Tabela/>} path="/Tabela"/>
                <Route element={<Projeto/>} path="/Projeto"/>
                <Route element={<Pesquisar/>} path="/Pesquisar"/>
                <Route element={<Perfil/>} path="/Perfil"/>
                <Route element={<Informativo/>} path="/Informativo"/>
                <Route element={<Favoritos/>} path="/Favoritos"/>
                <Route element={<Comunicacao/>} path="/Comunicacao"/>
                <Route element={<Add/>} path="/Add"/>

            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;