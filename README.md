# Multi-City-Weather-Dashboard
Created the initial code for the page.
created header with a background of navy blue; text color of white; and text alignment of center.
created user input text box and search button.
created button for City established a row and column for the button.  In addition to, incorporating a hover affect for the buttons background navy, and wording steele grey
added a section, with top-padding and a top border.
<!-- <div class="col-12 col-lg-9">
        <div class="m-5 row justify-content-around">
          <div class="col-12 col-md-6 col-xl-3 mb-3">
        <input type="text" id= "searchTerm" value=""/>
        <p id="currentDay" class="lead"></p>
      </header>
      <div class="container">
      </div>
  </div>
        </div>       
    <main class="col-12 col-lg-9">
        <div class="m-5 row justify-content-around">
          <div class="col-12 col-md-6 col-xl-3 mb-3">
            <div class = "card">
          <h4 class = "1stCurrentDay"></h4> -->
          <!-- <ul id="list-toDo" class="list-group list-group-flush">
          <li class="list-group-item">
           <span class = "badge badge-primary badge-pill">05/28/2020</span> 
           <p class="m-1"> Sample task to do</p> -->
          <!-- </li>
        </ul>
        </div>
        </div>
        <div class="col-12 col-md-6 col-xl-3 mb-3">
          <div class="card">
        <h4 class="2ndCurrentDay"></h4>
        <div class="weather-icon"><img src= ""></div>
        <div class ="temperature-value"><p> - <span>f</span></p>/div>
        <div class ="temperature-description"><p> -</p></div>    
          <li class="list-group-item">
           </li> -->
        <!-- </ul>
        </div>
        </div>
        <div class="col-12 col-md-6 col-xl-3 mb-3">
        <div class="card">
        <h4 class ="3rdCurrentDay"></h4>
        <!-- <ul id="list-inReview" class="list-group-flush">
          <li class="list-group-item">
          <span class="badge badge-primary badge-pill"> 05/28/2020</span>
          <p class="m-1">Sample task in review</p> -->
          <!-- </li>
        </ul>
        </div>
      </div>
        <div class ="col-12 col-md-6 col-xl-3 mb-3">
        <div class="card">
        <h4 class="4thcurrentDay"></h4> -->
        <!-- <ul id="list-done" class="list-group-flush">
        <li class="list-group-item">
         <span class="badge badge-primary badge-pill"> 05/28/2020</span>
         <p class="m-1"> Sample task that's done</p>  -->
        <!-- </li>
        </ul>
        </div>
      </div>
      <div class ="col-12 col-md-6 col-xl-3 mb-3">
        <div class="card">
        <h4 class="5thcurrentDay"></h4> --> -->
        <!-- <ul id="list-done" class="list-group-flush">
        <li class="list-group-item">
         <span class="badge badge-primary badge-pill"> 05/28/2020</span>
         <p class="m-1"> Sample task that's done</p>  -->
        <!-- </li>
        </ul>
        </div>
      </div>
    </main>

    <!-- <div class="col-12 col-lg-9">
        <div class="m-5 row justify-content-around">
          <div class="col-12 col-md-6 col-xl-3 mb-3">
        <input type="text" id= "searchTerm" value=""/>
        <p id="currentDay" class="lead"></p>
      </header>
      <div class="container">
      </div>
  </div>
        </div>       
    <main class="col-12 col-lg-9">
        <div class="m-5 row justify-content-around">
          <div class="col-12 col-md-6 col-xl-3 mb-3">
            <div class = "card">
          <h4 class = "1stCurrentDay"></h4> -->
          <!-- <ul id="list-toDo" class="list-group list-group-flush">
          <li class="list-group-item">
           <span class = "badge badge-primary badge-pill">05/28/2020</span> 
           <p class="m-1"> Sample task to do</p> -->
          <!-- </li>
        </ul>
        </div>
        </div>
        <div class="col-12 col-md-6 col-xl-3 mb-3">
          <div class="card">
        <h4 class="2ndCurrentDay"></h4>
        <div class="weather-icon"><img src= ""></div>
        <div class ="temperature-value"><p> - <span>f</span></p>/div>
        <div class ="temperature-description"><p> -</p></div>    
          <li class="list-group-item">
           </li> -->
        <!-- </ul>
        </div>
        </div>
        <div class="col-12 col-md-6 col-xl-3 mb-3">
        <div class="card">
        <h4 class ="3rdCurrentDay"></h4>
        <!-- <ul id="list-inReview" class="list-group-flush">
          <li class="list-group-item">
          <span class="badge badge-primary badge-pill"> 05/28/2020</span>
          <p class="m-1">Sample task in review</p> -->
          <!-- </li>
        </ul>
        </div>
      </div>
        <div class ="col-12 col-md-6 col-xl-3 mb-3">
        <div class="card">
        <h4 class="4thcurrentDay"></h4> -->
        <!-- <ul id="list-done" class="list-group-flush">
        <li class="list-group-item">
         <span class="badge badge-primary badge-pill"> 05/28/2020</span>
         <p class="m-1"> Sample task that's done</p>  -->
        <!-- </li>
        </ul>
        </div>
      </div>
      <div class ="col-12 col-md-6 col-xl-3 mb-3">
        <div class="card">
        <h4 class="5thcurrentDay"></h4> --> -->
        <!-- <ul id="list-done" class="list-group-flush">
        <li class="list-group-item">
         <span class="badge badge-primary badge-pill"> 05/28/2020</span>
         <p class="m-1"> Sample task that's done</p>  -->
        <!-- </li>
        </ul>
        </div>
      </div>
    </main>




     <div class ="row min-vh-100 no gutters">
  <header class="col-12 col-lgp3 bg-light text-dark sitcky-top d-flex flex-column p-4 p-lg-3">
    <h2 class ="text-left">Search for a City:</h2>
    <form id="task-form">
        <div class="form-group">
            <input type="text" id="searchTerm" value="Mystic"/>
            <div class ="form-group">
                <button onclick="myfunction()" class="searchBtn" id="SearchTerm" type="submit">Search</button> 
       
         }
  
      </header>
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
    margin: 0;
    color: var(--dark);
    line-height: 1.25;
  }
  
  main {
    margin: 20px auto;
    width: 94%;
  }
  
  p {
    font-size: 1.2rem;
  }
  
   .btn {
    font-size: 1.3rem;
    text-decoration:none;
    padding: 6px 5px;
    width: 100%;
    display: block;
    margin: 5px 0;
    border-radius: var(--border-radius);
    color: var(--primary);
    border: none;
    outline: none;
    background-color: var(--light-dark);
    box-shadow: 3px 3px var(--dark);
    transform: translate(-1px, -1px);
  }
  
   .btn:hover {
    color: var(--primary);
    background-color: var(--tertiary);
    transform: translate(0, 0);
    box-shadow: 2px 2px var(--dark);
  }
  
  .btn-inline {
    display: inline;
  }
  
  .btn-back {
    border-radius: var(--border-radius);
    color: var(--primary);
    border: none;
    outline: none;
    background-color: var(--light-dark);
    box-shadow: 3px 3px var(--secondary);
    transform: translate(-1px, -1px);
    display: inline-block;
    width: auto;
    margin-top: 20px;
    padding: 15px;
    text-decoration: none;
    font-size: 1.2rem;
  }
  
   .btn-back:hover {
    color: var(--primary);
    background-color: var(--tertiary);
    transform: translate(0, 0);
    box-shadow: 2px 2px var(--dark);
  }
  
  .hero {
    padding: 3% 4%;
    background-color: var(--dark);
    color: var(--primary);
  }
  
  .hero p {
    max-width: 75%;
  }
  
  .app-title {
    font-size: 3rem;
    background-color: var(--primary);
    color: var(--dark);
    padding: 0 10px;
    display: inline-block;
    border-radius: var(--border-radius);
    box-shadow: 6px 5px var(--light-dark);
  }
  
  .list-group {
    padding: 0;
    list-style: none;
  }
  
  .list-item {
    margin-bottom: 10px;
    padding: 1.5%;
    border-radius: var(--border-radius);
    background-color: var(--light-dark);
    color: var(--primary);
    text-decoration: none;
  }
  
  .list-item:hover {
    background-color: var(--dark);
  }
  
  .status-icon {
    padding: 2px 5px;
    margin: 0 5px;
    background-color: rgba(255,255,255, 1);
    border-radius: var(--border-radius);
  }
  
  .icon-danger {
    color: rgb(255, 70, 70);
  }
  
  .icon-success {
    color: white(29, 153, 255);
  }
  
  /* FORM */
  .form-label,
  .form-input,
  .form-textarea {
    display: block;
  }
  
  .form-label {
    font-size: 1.1rem;
    margin: 0 0 0 5px;
  }
  
  .form-input {
    width: 100%;
    padding: 3%;
    margin: 5px 0;
    font-size: 1.2rem;
    border: 2px solid var(--light-dark);
    border-radius: var(--border-radius);
  }
  
  /* HEIGHT / WIDTH UTILS */
  .min-100-vh {
    min-height: 100vh;
  }
  
  .min-100-vw {
    min-width: 100vw;
  }
  
  /* FONT UTILS */
  .text-uppercase {
    text-transform: uppercase;
  }
  
  
  /* FLEX CONTENT */
  .flex-row {
    display: flex;
    flex-wrap: wrap;
  }
  
  .flex-column {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
  
  .justify-space-between {
    justify-content: space-between;
  }
  
  .justify-space-around {
    justify-content: space-around;
  }
  
  .justify-flex-start {
    justify-content: flex-start
  }
  
  .justify-flex-end {
    justify-content: flex-end;
  }
  
  .justify-center {
    justify-content: center;
  }
  
  .align-stretch {
    align-items: stretch;
  }
  
  .align-end {
    align-items: flex-end;
  }
  
  .align-center {
    align-items: center;
  }
  
  .col-auto {
    flex-grow: 1;
  }
  
  .col-1 {
    flex: 0 0 calc(100% * 1 / 12 - 2%);
  }
  
  .col-2 {
    flex: 0 0 calc(100% * 2 / 12 - 2%);
  }
  
  .col-3 {
    flex: 0 0 calc(100% * 3 / 12 - 2%);
  }
  
  .col-4 {
    flex: 0 0 calc(100% * 4 / 12 - 2%);
  }
  
  .col-5 {
    flex: 0 0 calc(100% * 5 / 12 - 2%);
  }
  
  .col-6 {
    flex: 0 0 calc(100% * 6 / 12 - 2%);
  }
  
  .col-7 {
    flex: 0 0 calc(100% * 7 / 12 - 2%);
  }
  
  .col-8 {
    flex: 0 0 calc(100% * 8 / 12 - 2%);
  }
  
  .col-9 {
    flex: 0 0 calc(100% * 9 / 12 - 2%);
  }
  
  .col-10 {
    flex: 0 0 calc(100% * 10 / 12 - 2%);
  }
  
  .col-11 {
    flex: 0 0 calc(100% * 11 / 12 - 2%);
  }
  
  .col-12 {
    flex: 0 0 100%;
  }
  
  /* col-sm */
  @media screen and (min-width: 640px) {
    .col-sm-1 {
      flex: 0 0 calc(100% * 1 / 12 - 2%);
    }
  
    .col-sm-2 {
      flex: 0 0 calc(100% * 2 / 12 - 2%);
    }
  
    .col-sm-3 {
      flex: 0 0 calc(100% * 3 / 12 - 2%);
    }
  
    .col-sm-4 {
      flex: 0 0 calc(100% * 4 / 12 - 2%);
    }
  
    .col-sm-5 {
      flex: 0 0 calc(100% * 5 / 12 - 2%);
    }
  
    .col-sm-6 {
      flex: 0 0 calc(100% * 6 / 12 - 2%);
    }
  
    .col-sm-7 {
      flex: 0 0 calc(100% * 7 / 12 - 2%);
    }
  
    .col-sm-8 {
      flex: 0 0 calc(100% * 8 / 12 - 2%);
    }
  
    .col-sm-9 {
      flex: 0 0 calc(100% * 9 / 12 - 2%);
    }
  
    .col-sm-10 {
      flex: 0 0 calc(100% * 10 / 12 - 2%);
    }
  
    .col-sm-11 {
      flex: 0 0 calc(100% * 11 / 12 - 2%);
    }
  
    .col-sm-12 {
      flex: 0 0 100%;
    }
  }
  
  
  /* col-md */
  @media screen and (min-width: 768px) {
    .col-md-1 {
      flex: 0 0 calc(100% * 1 / 12 - 2%);
    }
  
    .col-md-2 {
      flex: 0 0 calc(100% * 2 / 12 - 2%);
    }
  
    .col-md-3 {
      flex: 0 0 calc(100% * 3 / 12 - 2%);
    }
  
    .col-md-4 {
      flex: 0 0 calc(100% * 4 / 12 - 2%);
    }
  
    .col-md-5 {
      flex: 0 0 calc(100% * 5 / 12 - 2%);
    }
  
    .col-md-6 {
      flex: 0 0 calc(100% * 6 / 12 - 2%);
    }
  
    .col-md-7 {
      flex: 0 0 calc(100% * 7 / 12 - 2%);
    }
  
    .col-md-8 {
      flex: 0 0 calc(100% * 8 / 12 - 2%);
    }
  
    .col-md-9 {
      flex: 0 0 calc(100% * 9 / 12 - 2%);
    }
  
    .col-md-10 {
      flex: 0 0 calc(100% * 10 / 12 - 2%);
    }
  
    .col-md-11 {
      flex: 0 0 calc(100% * 11 / 12 - 2%);
    }
  
    .col-md-12 {
      flex: 0 0 100%;
    }
  }
  
  /* col-lg */
  @media screen and (min-width: 992px) {
    .col-lg-1 {
      flex: 0 0 calc(100% * 1 / 12 - 2%);
    }
  
    .col-lg-2 {
      flex: 0 0 calc(100% * 2 / 12 - 2%);
    }
  
    .col-lg-3 {
      flex: 0 0 calc(100% * 3 / 12 - 2%);
    }
  
    .col-lg-4 {
      flex: 0 0 calc(100% * 4 / 12 - 2%);
    }
  
    .col-lg-5 {
      flex: 0 0 calc(100% * 5 / 12 - 2%);
    }
  
    .col-lg-6 {
      flex: 0 0 calc(100% * 6 / 12 - 2%);
    }
  
    .col-lg-7 {
      flex: 0 0 calc(100% * 7 / 12 - 2%);
    }
  
    .col-lg-8 {
      flex: 0 0 calc(100% * 8 / 12 - 2%);
    }
  
    .col-lg-9 {
      flex: 0 0 calc(100% * 9 / 12 - 2%);
    }
  
    .col-lg-10 {
      flex: 0 0 calc(100% * 10 / 12 - 2%);
    }
  
    .col-lg-11 {
      flex: 0 0 calc(100% * 11 / 12 - 2%);
    }
  
    .col-lg-12 {
      flex: 0 0 100%;
    }
  }
  
  /* col-xl */
  @media screen and (min-width: 1200px) {
    .col-xl-1 {
      flex: 0 0 calc(100% * 1 / 12 - 2%);
    }
  
    .col-xl-2 {
      flex: 0 0 calc(100% * 2 / 12 - 2%);
    }
  
    .col-xl-3 {
      flex: 0 0 calc(100% * 3 / 12 - 2%);
    }
  
    .col-xl-4 {
      flex: 0 0 calc(100% * 4 / 12 - 2%);
    }
  
    .col-xl-5 {
      flex: 0 0 calc(100% * 5 / 12 - 2%);
    }
  
    .col-xl-6 {
      flex: 0 0 calc(100% * 6 / 12 - 2%);
    }
  
    .col-xl-7 {
      flex: 0 0 calc(100% * 7 / 12 - 2%);
    }
  
    .col-xl-8 {
      flex: 0 0 calc(100% * 8 / 12 - 2%);
    }
  
    .col-xl-9 {
      flex: 0 0 calc(100% * 9 / 12 - 2%);
    }
  
    .col-xl-10 {
      flex: 0 0 calc(100% * 10 / 12 - 2%);
    }
  
    .col-xl-11 {
      flex: 0 0 calc(100% * 11 / 12 - 2%);
    }
  
    .col-xl-12 {
      flex: 0 0 100%;
    }
  }
