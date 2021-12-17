import React from "react";

export const AddDrive = () => {
    return (
        <div className="w-5/12 mx-auto">
            <form>
                <div className="form-group">
                    <select name="driveType">
                        <option value="OneDrive">OneDrive</option>
                        <option value="SharePoint">SharePoint</option>
                        <option value="GoogleDrive">GoogleDrive</option>
                    </select>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" aria-describedby="emailHelp" />
                </div>
            </form>
        </div>
    );
}