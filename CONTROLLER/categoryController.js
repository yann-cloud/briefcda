import Category from "../MODELE/Category.js";

export const getCategories = async (req, res, next) =>{

    const category = await Category.find();
    res.render("category/getCategories", {
        title: 'categoryList',
        categories: category
    });

    console.log({category});
};

export const getCategory = async (req, res, next) =>{

    const category = await Category.findOne()
    res.render("category/getCategory", {
        title: 'category',
        category: category
    });

    console.log({category});
};

export const postCategories = async (req, res, next) =>{
    const categoryName = req.body.categoryName;

    const category = await Category.create({
        categoryName,
    });
    console.log(category);

    res.status(201).send('categories created', category)
};