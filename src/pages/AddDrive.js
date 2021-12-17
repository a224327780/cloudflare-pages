import React from "react";

const auth = (e) => {
    const value = e.target.value;
    console.log(value)
}

export const AddDrive = () => {
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
                    <input type="text" name="drive_id" placeholder="driveId" className="form-control" />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="driveName" name="drive_name" className="form-control" />
                </div>
                <div className="form-group">
                    <input type="text" name="client_id" placeholder="client_id" className="form-control" />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="client_secret" name="client_secret" className="form-control" />
                </div>
                <div className="form-group">
                    <button onClick={(e) => auth(e)} type="button" className="btn">提交</button>
                </div>
            </form>
        </div>
    );
}