import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const ProdutoCategoria = sequelize.define(
    "ProdutoCategoria",
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
        tableName: "Produto_categorias",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
);

export default ProdutoCategoria;
