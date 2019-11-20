import { LitElement,html } from 'lit-element'; 


class MoviesTable extends LitElement { 
  render() {
    return html`
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card strpied-tabled-with-hover">
                                <div class="card-header ">
                                    <h4 class="card-title">Movies Table</h4>
                                    <p class="card-category">Striped Table with Hover</p>
                                </div>
                                <div class="card-body table-full-width table-responsive">
                                    <table class="table table-hover table-striped">
                                        <thead>
                                            <th>Title</th>
                                            <th>Director</th>
                                            <th>Released</th>
                                            <!--<th>Gross</th>-->
                                        </thead>
                                        <tbody>
                                            ${this.movies.map(
                                              (movie) => {
                                                var disp=html`
                                            <tr>
                                                <td>${movie.title}</td>
                                                <td>${movie.director}</td>
                                                <td>${movie.released}</td>
                                                <!--<td>${movie.gross}</td>-->
                                            </tr>
                                                `
                                                return disp;
                                              }
                                            )
                                            }

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                      </div> <!-- row -->
                    </div> <!-- container fluid -->
    `
  }
  /*
 createRenderRoot() {
  /**
   * Render template in light DOM. Note that shadow DOM features like
   * encapsulated CSS are unavailable.
   *
    return this;
  } 
  */ 



  constructor() {
    super();
    /*
    console.log('hello-table starting...'); 
    this.movies=[{'title':'Sesame Street','director':'Big Bird'}];
    */
   this.movies=[];
  }


  firstUpdated() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange  = () => {
        if (xhr.readyState === 4){
            //document.getElementById('test').innerHTML = xhr.responseText;
            //this.movies = xhr.responseText;
            console.log('xhr.responseText', xhr.responseText);
            console.log('this', this);
            this.movies = JSON.parse(xhr.responseText);
            this.requestUpdate();
        }
    };
    xhr.open('GET', 'http://cloudsqlnet.lightbase.io:3100/db_test_test/movies?select=title,%20director,%20released,%20gross&limit=6');
    xhr.send();  
  } //firstUpdated()

} customElements.define('movies-table', MoviesTable);


/*



*/