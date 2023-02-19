//synchronouse
const x = 5;
const y = x + 20;

//asynchronous
const getAllUsers = async (req, res) => {

    // User.find({})
    //     .then(users => {
    //         console.log('done getting user');
    //         res.status(200).json(users);
    //     });
    // console.log(1);

    const users = await User.find({})
    console.log(1);

    res.status(200)
        .json(users)

    console.log('1');

    // setTimeouit is an example of an async function
    setTimeout(() => {
        console.log('2');
    }, 0);

    console.log('3')
    console.log(4)
    console.log(5)

// Javascript event loop