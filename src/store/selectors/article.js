export default (articles, categorie = "") => {
    if(categorie){
        return articles.filter(({categories}) => categories.includes(categorie))
    }
    return articles
}
