<!DOCTYPE HTML>
<html>
<head>
    <script type="text/javascript" src="script.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css" />
 </head>
<body>
<table class="table grid-table" id='grid-table'>
    <tr>
        <th class="main-grid-cell-head">№</th>
        <th class="main-grid-cell-head">Name</th>
        <th class="main-grid-cell-head">Surname</th>
        <th class="main-grid-cell-head">Age</th>
    </tr>
    <tr>
        <td>1</td>
        <td>John</td>
        <td>Smith</td>
        <td>25</td>
    </tr>

    <tr>
        <td>2</td>
        <td>Pete</td>
        <td>Brown</td>
        <td>28</td>
    </tr>

    <tr>
        <td>3</td>
        <td>Alex</td>
        <td>Bailey</td>
        <td>24</td>
    </tr>

    <tr>
        <td>4</td>
        <td>Jhone</td>
        <td>Brooke</td>
        <td>28</td>
    </tr>

    <tr>
        <td>5</td>
        <td>Todd</td>
        <td>Sellers</td>
        <td>27</td>
    </tr>
    
</table>
<script>
    mySortable = new SortableGrid();
    mySortable.init(document.getElementById('grid-table'));
</script>
</body>
</html>