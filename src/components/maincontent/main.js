import './main.css'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Grid';
function Main(){
    const topSpots = [
        'Lagos, Nigeria',
        'Miami, USA',
        'Cape Town, SA',
        'Fiji, South Asia',
        'Paris, France',
        'Maldives, South Asia',
        'Beijing, China',
        'Big Island, Hawaii',
        'Boston, USA',
        'Brisbane, Australia',
        'Caesarea, Israel',
        'Doha, Qatar',
        'Jalisco, Mexico'
    ]

    const trending = [
        'https://images.unsplash.com/photo-1567491634123-460945ea86dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80',
        'https://images.unsplash.com/photo-1596618502142-d2a9d0c1fc2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80',
        'https://images.unsplash.com/photo-1603076534270-364861eac82d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        'https://images.unsplash.com/photo-1569369926169-9ee7fb80adeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1044&q=80',
        'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80',
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        'https://images.unsplash.com/photo-1578815552961-cce5ebaa835b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80',

    ]
    return (
        <div className="main-content">
         <Grid container spacing={2} justify="center">

             <Grid style={{padding:25}} item  xs={12} sm={6} md={3}>
                 <Paper style={{ padding:25, background:'white', borderRadius:5 }}>
                 <div style= {{ fontWeight:600, fontSize:18,paddingBottom:10, borderBottom:'1px solid #F5F5F5' }}>Top Spots</div>
                 {
                     topSpots.map((item) => {
                     return <div style= {{ color:'#797979', fontSize:14, borderBottom:'1px solid #F5F5F5',paddingTop:10, paddingBottom:10}}>{item}</div>
                     })
                 }
                 </Paper>
             </Grid>

             <Grid  style={{ padding:25}} item  xs={12} sm={6} md={9}>
                 <Paper style={{background:'transparent'}}>
                    <div className="img-banner img-1">
                        <div className="img-cover">
                        <div className="img-details">
                         <h2 style={{fontWeight:500,}}>Maldives, South Asia</h2>
                         <p style={{fontSize:13, width:70 + '%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed nisi, dui, 
                            enim vel nec massa risus nibh. Commodo at porta nulla ante laoreet 
                            egestas ultricies eget. Ultricies consectetur eu vel netus. At turpis tristi</p>
                        </div>
                        </div>
                    </div>
                    <h2 style={{fontWeight:600}}>Featured Spots</h2>
                    <div style={{height:500}}>
             <Grid container spacing={2} >
             <Grid item  xs={12} sm={6} md={5}>
                 <Paper>
                 <div className="img-banner img-2">
                        <div className="img-cover">
                        <div className="img-details">
                         <h2 style={{fontWeight:500,fontSize:16}}>Doha, Quatar</h2>
                         <p style={{fontSize:11, width:70 + '%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed nisi, dui, 
                            enim vel nec massa risus nibh. Commodo at porta nulla ante laoreet 
                            egestas ultricies eget. Ultricies consectetur eu vel netus. At turpis tristi</p>
                        </div>
                        </div>
                    </div>
                 </Paper>
             </Grid>
             <Grid item  xs={12} sm={6} md={7}>
                 <Paper>
                   <Grid container spacing={2} >
             <Grid item  xs={12} sm={6} md={6}>
                 <div className="img-banner img-3">
                        <div className="img-cover">
                        <div className="img-details">
                         <h2 style={{fontWeight:500,fontSize:16}}>Doha, Quatar</h2>
                         <p style={{fontSize:11, width:70 + '%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed nisi, dui, 
                            enim vel nec massa risus nibh.</p>
                        </div>
                        </div>
                    </div>
             </Grid>
             <Grid item  xs={12} sm={6} md={6}>
                 <div className="img-banner img-4">
                        <div className="img-cover">
                        <div className="img-details">
                         <h2 style={{fontWeight:500,fontSize:16}}>Doha, Quatar</h2>
                         <p style={{fontSize:11, width:70 + '%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed nisi, dui, 
                            enim vel nec massa risus nibh.</p>
                        </div>
                        </div>
                    </div>
             </Grid>
             <Grid item  xs={12} sm={12} md={12}>
                 <div className="img-banner img-5">
                        <div className="img-cover">
                        <div className="img-details">
                         <h2 style={{fontWeight:500,fontSize:16}}>Doha, Quatar</h2>
                         <p style={{fontSize:11, width:70 + '%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed nisi, dui, 
                            enim vel nec massa risus nibh. </p>
                        </div>
                        </div>
                    </div>
             </Grid>
         </Grid>
    
                 </Paper>
             </Grid>
         </Grid>
                    </div>
                    <br></br>

                    <div className="trending-section">
                        <div className="header">
                           <h2 style={{fontWeight:600}}>Trending Spots</h2>
                        </div>
                        <Grid container spacing={2} >
                        {
                            trending.map((spot) => {
                                return  <Grid item  xs={12} sm={6} md={3}>
                                <Paper>
                                <div className="img-banner" style={{ backgroundImage: `url('${spot}')`, height:200}}>
                                   </div>
                                </Paper>
                            </Grid>
                            })
                        }
             </Grid>
                    </div>

                    <div className="packages-section">
                    <div className="img-banner img-6">
                        <div className="img-cover">
                        <div className="img-details-2">
                         <h2 style={{fontWeight:500,}}>Interested in our travel packages? </h2>
                         <p style={{fontSize:13}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed nisi, dui, 
                            enim vel nec massa risus nibh. Commodo at porta nulla ante laoreet 
                            egestas ultricies eget. Ultricies consectetur eu vel netus. At turpis tristi</p>
                        <br/>
                        <button className="book-now-btn">Book Now</button>
                        <button className="tour-btn">Take a tour</button>
                    </div>
                    </div>
                    </div>
                    </div>
                 </Paper>
             </Grid>
         </Grid>
        </div>
        
    )
}

export default Main;