<nav class="navbar navbar-default navbar-fixed-top">
  <div class="container-fluid">
    <div class="navbar-header">
      <button class="navbar-toggle collapsed" data-toggle="collapse"
        data-target="#dashboardNav" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
    </div>
    <div id="dashboardNav" class="collapse navbar-collapse">
      <ul class="nav navbar-nav navbar-left navbarlogo">
        <li><img id="hatchitNavLogo" src="<?php echo base_url(); ?>resources/img/logo1.png"><b>Content Management System</b></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li>
          <a href="<?php echo base_url(); ?>">
            <i class="fa fa-arrow-circle-o-left"></i>
            Back to website
          </a>
        </li>
        <li class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown"
            role="button" aria-haspopup="true" aria-expanded="false">
            <i class="glyphicon glyphicon-user"></i>
            <?php echo $username; ?>
            <span class="caret"></span>
          </a>
          <ul class="dropdown-menu">
            <li>
              <a href="<?php echo base_url(); ?>cms/logout">
                <i class="fa fa-unlock"></i>
                Logout
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div class="container-fluid">
  <div class="row">
    <aside id="adminMenu" class="col-md-2 hidden-sm hidden-xs"
      role="navigation">
      <ul id="sidebarMenu" class="nav">
        <!-- <li>
          <a href="<?php echo base_url(); ?>cms/booking">
            <i class="fa fa-envelope"></i>
            <span class="hidden-xs">Booking</span>
          </a>
        </li>
        <li>
          <a href="<?php echo base_url(); ?>cms/services">
            <i class="fa fa-graduation-cap"></i>
            <span class="hidden-xs">Services</span>
          </a>
        </li> -->
        <!-- <li>
          <a href="<?php echo base_url(); ?>cms/report">
            <i class="fa fa-users"></i>
            <span class="hidden-xs">Download Report</span>
          </a>
        </li> -->
        <li>
          <a href="<?php echo base_url(); ?>cms/customers">
            <i class="fa fa-users"></i>
            <span class="hidden-xs">Customers</span>
          </a>
        </li>
        <li>
          <a href="<?php echo base_url(); ?>cms/orders">
            <i class="fa fa-graduation-cap"></i>
            <span class="hidden-xs">Orders</span>
          </a>
        </li>
        <li>
          <a href="<?php echo base_url(); ?>cms/users">
            <i class="fa fa-users"></i>
            <span class="hidden-xs">Users</span>
          </a>
        </li>
        <li>
          <a href="<?php echo base_url(); ?>cms/products">
            <i class="fa fa-graduation-cap"></i>
            <span class="hidden-xs">Products</span>
          </a>
        </li>
        <li>
          <a href="<?php echo base_url(); ?>cms/logs">
            <i class="fa fa-list"></i>
            <span class="hidden-xs">Logs</span>
          </a>
        </li>
      </ul>
    </aside>
