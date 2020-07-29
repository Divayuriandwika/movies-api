const { Movies } = require('../../models');


module.exports = {

	getAll: async (req, res) => {
		try {
			const movies = await Movies.find({});

			res.status(200).json({ message: 'Get All Movies', data: movies });
		} catch (error) {
			console.log(error);
		}
    },


    create: async (req, res) => {
        try {
            const { title, poster, resume, rating, genre, year } = req.body;

            const movies = await Movies.create({
                title, 
                poster, 
                resume, 
                rating, 
                genre, 
                year
            });

            res.status(201).json({
                message: "New movie successfully created!",
                data: movies,
            });
        } catch (error) {
            console.log(error);
        }
    },


    getMovieById: async (req, res) => {
		try {
			const { id } = req.params;
			const movie = await Movies.findById(id);
			res.status(200).json({
                message: `Get movie by ID ${id} success`,
                data: movie,
            });
		} catch (error) {
			console.log(error);
		}
	},

    edit: async (req, res) => {
        try {
            const { id } = req.params;
            const { title, poster, resume, rating, genre, year } = req.body;
            const edited = {
                title, 
                poster, 
                resume, 
                rating, 
                genre, 
                year
            };

            const editMovie = await Movies.findByIdAndUpdate(id, {
                $set: {
                    ...edited
                },
            }, {
                new:true
            }
         );


            res.status(200).json({
                message: `Edit movie with id : ${id} is successfully`,
                data: editMovie,
            });
        } catch (error) {
            console.log(error);
        }
    },


    deleteMovie: async (req, res) => {
        try {
            const { id } = req.params;

            const deleteMovie = await Movies.findByIdAndDelete(id);

            res.status(200).json({
                message: `Movie with id : ${id} is successfully deleted`,
                data: deleteMovie,
            });
        } catch (error) {
            console.log(error);
        }
    },
}