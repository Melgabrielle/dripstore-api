import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const ProdutoCategoria = sequelize.define(
    "Produto e categoria",
    {
        produto_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        categoria_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: "produto e categoria",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
);

export default ProdutoCategoria;
