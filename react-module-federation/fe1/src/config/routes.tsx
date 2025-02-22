import {createHashRouter} from "react-router-dom";
import React from "react";
import Index from "@/pages/Index";

// 路由配置
export const routes = [
    {
        path: '/',
        element: <Index />,
    },
];

export const hashRoutes = createHashRouter(
    [
        ...routes
    ]
);
