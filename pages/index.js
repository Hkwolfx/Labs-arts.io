import Layout from '../components/Layout';
import Link from 'next/link';

const Index = () => {
    return (
        <Layout>
            <article className="overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1 className="display-4 font-weight-bold">
                                ARTISTIC BLOGS & TUTORIALS
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center pt-4 pb-5">
                            <p className="lead">
                                Best sharing platform for artists and creators.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="flip flip-horizontal">
                                <div
                                    className="front"
                                    style={{
                                        backgroundImage:
                                            'url(' +
                                            'https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg' +
                                            ')'
                                    }}
                                >
                                    <h2 className="text-shadow text-center h1">Cinema</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href="/categories/cinema">
                                        <a>
                                            <h3 className="h1">Cinema</h3>
                                        </a>
                                    </Link>
                                    <p className="lead">Venez échanger et apprendre autour du Cinéma</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="flip flip-horizontal">
                                <div
                                    className="front"
                                    style={{
                                        backgroundImage:
                                            'url(' +
                                            'https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg' +
                                            ')'
                                    }}
                                >
                                    <h2 className="text-shadow text-center h1">Musique</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href="/categories/musique">
                                        <a>
                                            <h3 className="h1">Musique</h3>
                                        </a>
                                    </Link>
                                    <p className="lead">
                                        Vous jouez quoi en ce moment ? 
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="flip flip-horizontal">
                                <div
                                    className="front"
                                    style={{
                                        backgroundImage:
                                            'url(' +
                                            'https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg' +
                                            ')'
                                    }}
                                >
                                    <h2 className="text-shadow text-center h1">Photographie</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href="/categories/photographie">
                                        <a>
                                            <h3 className="h1">Photographie</h3>
                                        </a>
                                    </Link>
                                    <p className="lead">Partagez vos meilleurs shots !</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="flip flip-horizontal">
                                <div
                                    className="front"
                                    style={{
                                        backgroundImage:
                                            'url(' +
                                            'https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg' +
                                            ')'
                                    }}
                                >
                                    <h2 className="text-shadow text-center h1">Art-Vivant</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href="/categories/art-vivant">
                                        <a>
                                            <h3 className="h1">Art-Vivant</h3>
                                        </a>
                                    </Link>
                                    <p className="lead">Oui c'est de l'art !!!!</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="flip flip-horizontal">
                                <div
                                    className="front"
                                    style={{
                                        backgroundImage:
                                            'url(' +
                                            'https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg' +
                                            ')'
                                    }}
                                >
                                    <h2 className="text-shadow text-center h1">Art-Moderne</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href="/categories/art-moderne">
                                        <a>
                                            <h3 className="h1">Art Moderne</h3>
                                        </a>
                                    </Link>
                                    <p className="lead">
                                        Partagez nous vos démos, on adore !
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="flip flip-horizontal">
                                <div
                                    className="front"
                                    style={{
                                        backgroundImage:
                                            'url(' +
                                            'https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg' +
                                            ')'
                                    }}
                                >
                                    <h2 className="text-shadow text-center h1">Littérature</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href="/categories/litterature">
                                        <a>
                                            <h3 className="h1">Littérature</h3>
                                        </a>
                                    </Link>
                                    <p className="lead">Parlez-nous de vos oeuvres cultes ...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </Layout>
    );
};

export default Index;