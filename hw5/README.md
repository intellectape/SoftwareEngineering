# HW 5
## Name: Aditya Bhardwaj
## Unity ID: ABHARDW2


I have not added the inventory file in this repository, but the code for the inventory is:

```
[nodes]
node0 ansible_ssh_host=192.168.33.100 ansible_ssh_user=vagrant ansible_ssh_private_key_file=./keys/node0.key
```


### SETUP [40 points]
[Code for Setup Part](./setup.yml)

To run the setup part: 

**sudo ansible-playbook --inventory=inventory setup.yml**

### TASKS [40 points]
[Code for Task Part](./tasks.yml)

To run the task part: 

**sudo ansible-playbook --inventory=inventory tasks.yml**


### CONCEPTS [20 points]

|Q1. Why should developers use configuration management tools to manage their software programs? What can go wrong?|
|:--------|
|Answer:<table>
**Configuration management (CM)** ensures that the current design and build state of the system is known, good & trusted; and doesn’t rely on the tacit knowledge of the development team. It is sometimes referred to as IT automation. Being able to access an accurate historical record of system state is very useful – not only for project management and audit purposes, but for development activities such as debugging (for example, knowing what has changed between one set of tests and the next to help identify what could possibly be causing a fault). 

**If we don't use Configuration Management:**

* Figuring out which system components to change when requirements change.
* Re-doing an implementation because you implemented to meet requirements that had changed and you didn’t communicate that to all parties.
* Losing productivity when you replace a component with a flawed new version and can’t quickly revert to a working state.
* Replacing the wrong component because you couldn’t accurately determine which component needed replacing.

**If something goes wrong with Configuration Management, it leads to following situations:**

* The wrong requirements being accepted
* The wrong design being implemented
* The wrong tools being used for development
* The wrong software being tested
* The wrong test suite being used
* The wrong version of software being released

Any of the above issues can lead to huge amounts of wasted effort, wasted money, late deliveries and dissatisfied customers.

[Reference link 1 for the question](https://www.upguard.com/blog/5-configuration-management-boss)

[Reference link 2 for the question](https://blog.feabhas.com/2011/05/what-is-configuration-management-and-why-is-it-important-to-me/)
</table>

|Q2. Explain the difference bewteen continuous integration, continuous delivery, and continuous deployment, in your own words.|
|:--------|
|Answer: <table> 
* **Continuous Integration (CI):** 
Continuous integration is the process by which a developer’s code is integrated with the main code branch as quickly as possible. A CI strategy usually involves an automated build system that is tightly integrated with your software configuration management system. ***[short-lived feature branches, team is merging to master branch multiple times per day, fully automated build and test process which gives feedback within 10 minutes; deployment is manual.]***
* **Continuous Delivery (CD):** 
Continuous delivery takes CI one step further, with an emphasis not just on integrating code, but also making the code shippable at any time. Continuous delivery usually requires automated testing, so that the developers are confident that the code can be shipped at will. ***[CI + the entire software release process is automated, it may be composed of multiple stages, and deployment to production is manual.]***
* **Continuous Deployment:** 
Continuous deployment is a term that is usually applied to cloud software systems, where software code changes are automatically deployed to production, in a safe way. Continuous deployment strategies usually involve incremental deployments that allow changes to be tested incrementally.***[CI + CD + fully automated deployment to production.]***

[**Reference link 1 for the question**](https://semaphoreci.com/blog/2017/07/27/what-is-the-difference-between-continuous-integration-continuous-deployment-and-continuous-delivery.html) 

[**Reference link 2 for the question**](https://stackify.com/continuous-delivery-vs-continuous-deployment-vs-continuous-integration/)</table>

### ScreenCast for the Ansible Playbook
[![The link to the screencast](https://img.youtube.com/vi/pU0g9_qtiHw/0.jpg)](https://www.youtube.com/watch?v=pU0g9_qtiHw)