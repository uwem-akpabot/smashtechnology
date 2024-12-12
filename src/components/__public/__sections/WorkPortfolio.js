import { Link } from 'react-router-dom';

const WorkPortfolio = () => {
  return (
    <div className="sections" id="workportfolio">
      <div className="welcome">
        <div>
          <h3>Web Design and Software services. Our Products</h3>
          <p>Why we are special we are special we are special we are special why we 
          re special we are
          </p>
        </div>
      </div>

      <div id="course">
        <div>
          Left checkbox filters
        </div>

        <div className="">
          <div className="courses zy-c3 zy-c2-md zy-c2-sm zy-c1-xs">
            <div className="course">
              <div className="course_top"> 
                <div className="zyzics__subbanner">
                  <h4>Course short_title </h4>
                </div>     
              </div>
              <div className="course_content">
                <p><Link to="">Course.long_title</Link><br />
                
                <code>Unknown Category</code></p>

                <h1>$1000 USD</h1>

                <p><small>Equals to <span style={{ textDecoration: 'line-through double' }}>N</span>
                  {new Intl.NumberFormat('en-NG').format(Math.round(1000 * 1282.1 / 1000) * 1000)}
                </small></p>
                
                <Link to="" className="btn">+ Course Details</Link>
                <button>Start Learning</button>
              </div>
            </div>
     
        </div>
        </div>
    </div>   
    </div>  
  )
}

export default WorkPortfolio
