// import Model News
const News = require("../models/News");
// buat class NewsController
class NewsController {
  // buat fungsi
  /**
   * Menampilkan semua data news
   */
  async index(req, res) {
    const NewsModel = await News.all();

    if(News.lenght > 0) {
      const data = {
        message: "Data is empyt",
        data: News,
      };
      res.status(200).json(data);
    }

    else {
      const data = {
        message: "Get All Resource",
        data: News,
      };
      res.status(200).json(data);
    }

  }

  async store(req, res) {
    const NewsModel = await News.create(req.body);

    const data = {
      message: "Resource is added successfully",
      data: News,
    };
    res.status(201).json(data);
  }

  async update(req, res) {
    const { id } = req.params;

    const NewsModel = await News.find(id);

    if (News) {
      const NewsUpdate = await News.update(id, req.body);

      const data = {
        message: "Resource is update successfully",
        data: NewsUpdate,
      };
      res.status(200).json(data);
    } else {
      const data = {
        message: "Resource not found",
      }

      res.status(404).json(data);
    }
    
  }

  async destroy(req, res) {
    const { id } = req.params;

    const NewsModel = await News.find(id);

    if (News) {
      await News.delete(id);

      const data = {
        message: "Resource is delete successfully",
      };

      res.status(200).json(data);
    } else {
      const data = {
        message: "Resource not found",
      }

      res.status(404).json(data);
    }
  
  }

  async show(req, res) {
    const { id } = req.params;

    const NewsModel = await News.find(id);

    if (News) {
        const data = {
            message: "Get Detail Resource",
            data: News,
        };

        res.status(200).json(data)
    } else {
        const data = {
            message: `Resource not found`,          
        }

        res.status(404).json(data);
    }
  }

  async search(req, res) {
    const { title } = req.params;

    const NewsModel = await News.search(title);

    if (News) {
        const data = {
            message: "Get searched resource",
            data: News,
        };

        res.status(200).json(data)
    } else {
        const data = {
            message: `Resource not found`,          
        }

        res.status(404).json(data);
    }
  } 

  async findByCategory(req, res) {
    const { category } = req.params;
    //console.log(status);

    const NewsModel = await News.findByCategory(category);

    if (category == "sport") {
        const data = {
            message: "Get Sport Resource",
            data: News,
        };

        res.status(200).json(data)

    } else if (category == "finance") {
        const data = {
            message: "Get Finance Resource",
            data: News,
        };

        res.status(200).json(data)

    } else if (category == "automotive") {
        const data = {
            message: "Get Automotive Resource",
            data: News,
        };

        res.status(200).json(data)

    } else {
        const data = {
            message: `Resource not found`,          
        }

        res.status(404).json(data);
    }
  }
}

// membuat object NewsController
const object = new NewsController();

// export object NewsController
module.exports = object;
