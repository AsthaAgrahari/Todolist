module.exports = (sequelize,DataTypes) => {

    const Todo_list = sequelize.define("todo_list", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        subject: {
            type: DataTypes.STRING,
            allowNull: false
        },
        chapter_no: {
            type: DataTypes.INTEGER
        },
        ranking: {
            type: DataTypes.INTEGER
        },
    })

    return Todo_list
}