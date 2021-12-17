import type {FC} from "react";
import {useState} from "react";
import {UseInput} from "../components/Input";


export const AddDrive: FC = () => {
    const [client_id, setDriveId] = useState(null);
    const auth = (e) => {
        e.preventDefault()
        console.log(client_id)
    }
    return (
        <div className="w-5/12 ml-48 pt-20">
            <form>
                <div className="form-group">
                    <select name="driveType" className="form-control">
                        <option value="OneDrive">OneDrive</option>
                        <option value="SharePoint">SharePoint</option>
                        <option value="GoogleDrive">GoogleDrive</option>
                    </select>
                </div>
                <div className="form-group">
                    <input type="text" name="drive_id" onChange={e => setDriveId(e.target.value)} placeholder="driveId" className="form-control"/>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="driveName" name="drive_name"
                           className="form-control"/>
                </div>
                <div className="form-group">
                    <UseInput name="client_id" />
                </div>
                <div className="form-group">
                    <UseInput name="client_secret" />
                </div>
                <div className="form-group">
                    <button onClick={(e) => auth(e)} type="button" className="btn">提交</button>
                </div>
            </form>
        </div>
    );
}