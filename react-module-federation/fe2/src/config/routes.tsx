import {createHashRouter} from "react-router-dom";
import React from "react";
import Home from "@/pages/Home";

// 路由配置
export const routes = [
    {
        path: '/',
        element: <Home />,
    },
];

export const hashRoutes = createHashRouter(
    [
        ...routes
    ]
);
