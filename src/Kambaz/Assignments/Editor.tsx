export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" value="A1 - ENV + HTML" />
            <br />
            <br />
            <textarea id="wd-description" cols={40} rows={10}>
                The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories the Kanbas application should include a link to navigate back to the landing page.
            </textarea>
            <br />
            <br />
            <form>
                <table>
                    <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td align="left" valign="top">
                        <input id="wd-points" value={100} />
                    </td>
                    </tr>
                    <br />
                    <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td align="left" valign="top">
                        <select id="wd-group">
                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="Quizzes">QUIZZES</option>
                            <option value="Exams">EXAMS</option>
                        </select>
                    </td>
                    </tr>
                    <br />
                    <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td align="left" valign="top">
                        <select id="wd-display-grade-as">
                            <option value="percentage">Percentage</option>
                            <option value="number">Whole Number</option>
                        </select>
                    </td>
                    </tr>
                    <br />
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-submission-type">Submission Type</label>
                        </td>
                        <td align="left" valign="top">
                            <select id="wd-submission-type">
                                <option value="percentage">Online</option>
                                <option value="number">In-Person</option>
                            </select>
                        </td>
                    </tr>
                    <br />
                    <tr>
                        <td align="right" valign="top">
                        </td>
                        <td align="left" valign="top">
                            <label>Online Entry Options</label>
                            <br />
                            <input type="checkbox" name="check-entry-option" id="wd-text-entry"/>
                                <label htmlFor="wd-text-entry">Text Entry</label>
                            <br />
                            <input type="checkbox" name="check-entry-option" id="wd-website-url"/>
                                <label htmlFor="wd-website-url">Website URL</label>
                            <br />
                            <input type="checkbox" name="check-entry-option" id="wd-media-recordings"/>
                                <label htmlFor="wd-media-recordings">Media Recordings</label>
                            <br />
                            <input type="checkbox" name="check-entry-option" id="wd-student-annotation"/>
                                <label htmlFor="wd-student-annotation">Student Annotation</label>
                            <br />
                            <input type="checkbox" name="check-entry-option" id="wd-file-upload"/>
                                <label htmlFor="wd-file-upload">File Uploads</label>
                            <br />
                        </td>
                    </tr>
                    <br />
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-assign-to">Assign</label>
                        </td>
                        <td align="left" valign="top">
                            <label htmlFor="wd-assign-to">Assign to</label>
                            <br />
                            <input id="wd-assign-to" value={"Everyone"}/>
                        </td>
                    </tr>
                    <br />
                    <tr>
                        <td align="right" valign="top">
                        </td>
                        <td align="left" valign="top">
                            <label htmlFor="wd-due-date">Due</label>
                            <br />
                            <input type="date" id="wd-due-date"/>
                        </td>
                    </tr>
                    <br />
                    <tr>
                        <td align="right" valign="top">
                        </td>
                        <td align="left" valign="top">
                            <label htmlFor="wd-avilable-from">Available from</label>
                            <br />
                            <input type="date" id="wd-avilable-from"/>
                        </td>
                        <td align="left" valign="top">
                            <label htmlFor="wd-avilable-until">Until</label>
                            <br />
                            <input type="date" id="wd-avilable-until"/>
                        </td>
                    </tr>
                </table>
            </form>
            <hr />
            <button type="button" id="wd-all-good">
                Cancel
            </button>
            <button type="button" id="wd-all-good">
                Save
            </button>
        </div>
    );
}
