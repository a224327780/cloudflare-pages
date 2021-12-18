import type {FC} from "react";
import {fetcher} from "../utils/fetcher";


export const AddDrive: FC = () => {
    const fields = ['drive_id', 'drive_name', 'client_id', 'client_secret']

    const execute = (e) => {
        e.preventDefault()

        let data = {}
        let flag = true
        data['driveType'] = document.getElementById('driveType').value
        fields.forEach(function (item) {
            const e = document.getElementById(item)
            const e1 = e.parentNode.children[1]
            const value = e.value
            if (value === '') {
                e1.className = 'error'
                flag = false
            } else {
                e1.className = 'error hide'
            }
            data[item] = value
        })
        if (flag) {
            const params = new URLSearchParams(data).toString()
            const result = fetcher(`/api/drive/authorize?${params}`)
            console.log(result)
        }
        console.log(data)
    }
    return (
        <div className="w-4/12 ml-48 pt-20">
            <form>
                <div className="form-group">
                    <select id="driveType" name="driveType" className="form-control">
                        <option value="OneDrive">OneDrive</option>
                        <option value="SharePoint">SharePoint</option>
                        <option value="GoogleDrive">GoogleDrive</option>
                    </select>
                </div>
                {fields.map((field) => (
                    <div className="form-group" key={field}>
                        <input type="text" name={field} id={field} placeholder={field} className="form-control"/>
                        <p className="error hide">{field}不能空</p>
                    </div>
                ))}

                <div className="form-group">
                    <button onClick={(e) => execute(e)} type="button" className="btn">提交</button>
                </div>
            </form>
        </div>
    );
}