
// requestCategory : [reddit, dev.to, hashnode] 
export default{
    fetchNew: [`/new.json?after=`, `/articles?tag=ideas&per_page=1000`],
    fetchHot: [`/hot.json?after=`, `/articles?tag=ideas&top=100&per_page=1000`],
    fetchTop: [`/top.json?t=all&after=`, `/articles?tag=ideas&top=3000&per_page=1000`],
}