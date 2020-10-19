<h1 align="center">Task </h1>

- The project is available [here](https://liliyagavrishchishena.github.io/keepit-js/)

<p align="left">
In order to limit the options presented in a user interface, we wish to be able to determine if the given access rights granted to the current user include or does not include a given specific access.
</p>
<p align="left">
Accesses are represented in "Access Control Lists"; these are colon-separated lists of access control entries.
</p>
<p align="left">
Each access control entry consists first of a list of operations ("G" for GET, "U" for PUT, "P" for POST, "D" for DELETE, "H" for HEAD, "O" for OPTIONS) then a slash and finally the name of the endpoint controlled.
</p>
<p align="left">
For example, a user with "GET" access to the "Time" endpoint and "GET", "DELETE" and "POST" access to the "Users" endpoint would have an effective ACL that looks like: "G/Time:GDP/Users"
<p align="left">The ordering of operations and the order of endpoint names is not significant.</p>
<p align="left">In our application we wish to have a simple and efficient function
to determine of a single ACL entry is "dominated" by the users effective ACL.</p>
<p align="left">One ACL dominates another, if it contains at least the same access rights.</p>
<p align="left">

In other words:

- "G/Time" is dominated by "G/Time:GDP/Users"
- "D/Users" is dominated by "G/Time:GDP/Users"
- "PD/Users" is dominated by "G/Time:GDP/Users"

but

- "P/Time" is NOT dominated by "G/Time:GDP/Users"
- "H/Users" is NOT dominated by "G/Time:GDP/Users"
</p>
<p align="left">
Please provide the implementation for the following function: function acl_concrete_dominated(concrete, effective) Where 'concrete' is a single ACL entry like 'GH/Time' and 'effective' is a list of
ACL entries like 'GPU/Users:G/Time'.</p>
<p align="left">The function is expected to return true in the affirmative case, false in the negative and to throw on error.
</p>
