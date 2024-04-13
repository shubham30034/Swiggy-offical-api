export const filterData = (searchtext,allhotel) =>{
    const filterData = allhotel.filter((serach) =>
     serach.info.name.toLowerCase().includes(searchtext.toLowerCase()));
    return filterData;
}