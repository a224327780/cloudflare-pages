import type {FC} from "react";
import {useState} from "react";


export const AddDrive: FC = () => {
    const [driveType, setDriveType] = useState(null);
    const [drive_id, setDriveId] = useState(null);
    const [drive_name, setDriveName] = useState(null);
    const [client_id, setClientId] = useState(null);
    const [client_secret, setClientSecret] = useState(null);

    const auth = (e) => {
        e.preventDefault()
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
                    <input type="text" placeholder="driveName" onChange={e => setDriveName(e.target.value)} name="drive_name" className="form-control"/>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="client_id" onChange={e => setClientId(e.target.value)} name="client_id" className="form-control"/>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="client_secret" onChange={e => setClientSecret(e.target.value)} name="client_secret" className="form-control"/>
                </div>
                <div className="form-group">
                    <button onClick={(e) => auth(e)} type="button" className="btn">提交</button>
                </div>
            </form>
        </div>
    );
}