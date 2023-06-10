const makeTheTable = (data: any) =>{
    let table = `
        <table border='1'>
            <thead>
            <tr>
                <th>Client Type</th>
                <th>Future Index Long</th>
                <th>Future Index Short</th>
                <th>Future Stock Long</th>
                <th>Future Stock Short</th>
                <th>Option Index Call Long</th>
                <th>Option Index Put Long</th>
                <th>Option Index Call Short</th>
                <th>Option Index Put Short</th>
                <th>Option Stock Call Long</th>
                <th>Option Stock Put Long</th>
                <th>Option Stock Call Short</th>
                <th>Option Stock Put Short</th>
                <th>Total Long Contracts</th>
                <th>Total Short Contracts</th>
            </tr>
            </thead>
            <tbody>
    `;
    data.map((singleData:any) => {
        table += `
            <tr>
                <td>${singleData.Client_Type}</td>
                <td>${singleData.Future_Index_Long}</td>
                <td>${singleData.Future_Index_Short}</td>
                
                <td>${singleData.Future_Stock_Long}</td>
                <td>${singleData.Future_Stock_Short_}</td>
                <td>${singleData.Option_Index_Call_Long}</td>
                <td>${singleData.Option_Index_Put_Long}</td>
                <td>${singleData.Option_Index_Call_Short}</td>
                <td>${singleData.Option_Index_Put_Short}</td>
                <td>${singleData.Option_Stock_Call_Long}</td>
                <td>${singleData.Option_Stock_Put_Long}</td>
                <td>${singleData.Option_Stock_Call_Short}</td>
                <td>${singleData.Option_Stock_Put_Short}</td>
                <td>${singleData.Total_Long_Contracts_}</td>
                <td>${singleData.Total_Short_Contracts}</td>

            </tr>
            `;
    })
    table += `
        </tbody>
    </table>
    `;

    return table;
}

export default makeTheTable;