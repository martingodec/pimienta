const detalleController = {

    'index': (req, res)=>{
        res.render("detalleMenu");

    },

    'productoId': (req, res) => {

        res.send("Este el el producto con ID " + req.params.id);

    }



};

module.exports= detalleController;