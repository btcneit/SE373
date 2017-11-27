class View {

    get home() {
        return Promise.resolve(`<h1 class="content-title">List all Employees</h1>
                <p data-bind-model="deleteResultMsg" data-bind-safe data-bind-class="{'is-success': 'isDeleted', 'is-danger': '!isDeleted' }" class="notification is-spaced"></p>              
                <table class="content-table">
                  <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Job Title</th>
                        <th>Salary</th>
                        <th>Start Date</th>
                        <th></th>
                        <th></th>
                    </tr>
                  </thead>
                  <tbody data-bind-model="emplTable"></tbody>
              </table>`);
    }
    
     get add() {
        return Promise.resolve(` <h1 class="content-title">Add New Todo</h1>
                <form data-no-submit class="content-form">
                    <p data-bind-model="saveResultMsg" data-bind-safe data-bind-class="{'is-success': 'isAdded', 'is-danger': '!isAdded' }" class="notification"></p>
                    <div class="content-form-item">
                        <label class="label">First Name: </label>
                        <input type="text" name="fname" class="input" required />
                    </div>
                    <div class="content-form-item">
                        <label class="label">Last Name: </label>
                        <input type="text" name="lname" class="input" required />
                    </div>
                    <div class="content-form-item">
                        <label class="label">Department</label>
                        <select name="department" required>
                            <option value="" selected disabled>Please Select a Department</option>
                            <option value="IT">IT</option>
                            <option value="HR">HR</option>
                            <option value="SM">SM</option>
                        </select>
                    </div>
                    <div class="content-form-item">
                        <label class="label">Job Title: </label>
                        <input type="text" name="jobTitle" class="input" required />
                    </div>
                    <div class="content-form-item">
                        <label class="label">Salary: </label>
                        <input type="number" name="salary" class="input" required />
                    </div>
                    <div class="content-form-item">
                        <label class="label">Start Date: </label>
                        <input type="date" name="startDate" class="input" required />
                    </div>
                    <div class="content-form-item"> 
                        <input type="reset" value="Reset" />
                        <input type="button" value="Submit" class="button is-link" data-bind-event="click:saveEmpl" /> 
                    </div>
                </form>`)
    }

    get update() {
        return Promise.resolve(`<section>
                    <div>
                        <h1 class="title">Update Todo ID <span data-bind-model="id" class="has-text-warning"></span></h1>
                    </div>
                </section>
                <form data-no-submit>
                    <p data-bind-model="updateResultMsg" data-bind-safe data-bind-class="{'is-success': 'isUpdated', 'is-danger': '!isUpdated' }" class="notification is-spaced"></p>
                    <div>
                        <label class="label">First Name: </label>
                        <input type="text" name="fname" class="input" required />
                    </div>
                    <div>
                        <label class="label">Last Name: </label>
                        <input type="text" name="lname" class="input" required />
                    </div>
                    <div>
                        <label class="label">Department</label>
                        <select name="department" required>
                            <option value="" selected disabled>Please Select a Department</option>
                            <option value="IT">IT</option>
                            <option value="HR">HR</option>
                            <option value="SM">SM</option>
                        </select>
                    </div>
                    <div>
                        <label class="label">Job Title: </label>
                        <input type="text" name="jobTitle" class="input" required />
                    </div>
                    <div>
                        <label class="label">Salary: </label>
                        <input type="number" name="salary" class="input" required />
                    </div>
                    <div>
                        <label class="label">Start Date: </label>
                        <input type="date" name="startDate" class="input" required />
                    </div>
                    <div class="field"> 
                        <input type="reset" value="Reset" />
                        <input type="button" value="Submit" class="button is-link" data-bind-event="click:updateEmpl" /> 
                    </div>
                </form>`)
    }
    
}