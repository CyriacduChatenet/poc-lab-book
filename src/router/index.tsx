import { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";

import { HomePage } from "@/pages/home";
import { LoginPage } from "@/pages/login";
import { AddBookPage } from "@/pages/add";
import { BorrowBookPage } from "@/pages/borrow";
import { BringBackBookPage } from '../pages/bring-back/index';

export const Router = () : ReactElement => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/add-book" element={<AddBookPage />} />
            <Route path="/borrow-book" element={<BorrowBookPage />} />
            <Route path="/bring-back-book" element={<BringBackBookPage />} />
        </Routes>
    );
};