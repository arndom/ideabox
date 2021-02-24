
// requestCategory : [reddit, dev.to, hashnode] 
export default{
    fetchNew: [`/new.json`, `/articles?tag=ideas&per_page=1000`],
    fetchHot: [`/hot.json`, `/articles?tag=ideas&top=90&per_page=1000`],
    fetchTop: [`/top.json`, `/articles?tag=ideas&top=365&per_page=1000`],
}