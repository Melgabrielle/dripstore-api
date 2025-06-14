import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const ImagemProduto = sequelize.define(
    "ImagemProduto",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        produto_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        path: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
    },
    {
        tableName: "imagens_produtos",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
);

export default ImagemProduto;
