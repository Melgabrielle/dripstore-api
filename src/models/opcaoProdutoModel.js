import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Produto from "./produtoModel.js";

const OpcaoProduto = sequelize.define(
    "OpcaoProduto",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        produto_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "produtos",
                key: "id",
            },
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        },
        title: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        type: {
            type: DataTypes.ENUM("text", "color"),
            allowNull: true,
            defaultValue: "text",
        },
        values: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
    },
    {
        tableName: "opcoes_produtos",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
);

OpcaoProduto.belongsTo(Produto, { foreignKey: "produto_id", as: "produto" });

export default OpcaoProduto;