import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const OpcaoProduto = sequelize.define(
    "Opções do produto",
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
        title: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        values: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
    },
    {
        tableName: "clientes",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
);

export default OpcaoProduto;
