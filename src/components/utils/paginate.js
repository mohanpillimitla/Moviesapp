export default function Paginate(items,pageNumber,pageSize)
{


    const startIndex=(pageNumber-1)*pageSize

    const endIndex=startIndex+pageSize > items.length?items.length:startIndex+pageSize 
    return items.slice(startIndex,endIndex)
}