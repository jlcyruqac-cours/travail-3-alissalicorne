$(document).ready(function() {
	$('form').on('submit', function(event) {
		$.ajax({
			data : {
                prenom : $('#TXT_prenom').val(),
                nom: $('#TXT_Nom').val(),
                date: $('#TXT_Date').val()
			},
			type : 'POST',
			url : '/horoscope'
		})
		.done(function(data) {
            if (data.erreur) {
                $('#TXT_Erreur').text(data.erreur).show();
                $('#TXT_Horoscope_Image').hide();
                $('#TXT_Horoscope_Entete').hide();
                $('#TXT_Horoscope_Description').hide();
			} else {
                var signe = fct_signe(data.date);
                var description = fct_description(signe);
                var image = fct_image(signe);

                var texte_complet_entete = "Bonjour " + data.prenom + " " + data.nom + ". Votre signe astrologique est: " + signe;
                var texte_complet_description = "Votre avenir: " + description;

                $('#TXT_Horoscope_Image').wrap('<a href="' + image + '"></a>');
                $('#TXT_Horoscope_Image').text("Voir une image pas tres representative").show();
                $('#TXT_Horoscope_Entete').text(texte_complet_entete).show("slow");
                $('#TXT_Horoscope_Description').text(texte_complet_description).show("slow");
                $('#TXT_Erreur').hide();
			}
		});
		event.preventDefault();
	});
});

function fct_signe(date_complete) {
    var signe = "";
    var mois_jour = date_complete.split("-");
    var horoscope = mois_jour[1] + mois_jour[2];
    if (horoscope >= "0321" && horoscope <= "0420") {
        signe = "Belier";
    } else {
        if (horoscope >= "0421" && horoscope <= "0520") {
            signe = "Taureau";
        } else {
            if (horoscope >= "0521" && horoscope <= "0621") {
                signe = "Gemeaux";
            } else {
                if (horoscope >= "0622" && horoscope <= "0722") {
                    signe = "Cancer";
                } else {
                    if (horoscope >= "0723" && horoscope <= "0822") {
                        signe = "Lion";
                    } else {
                        if (horoscope >= "0823" && horoscope <= "0922") {
                            signe = "Vierge";
                        } else {
                            if (horoscope >= "0923" && horoscope <= "1022") {
                                signe = "Balance";
                            } else {
                                if (horoscope >= "1023" && horoscope <= "1122") {
                                    signe = "Scorpion";
                                } else {
                                    if (horoscope >= "1123" && horoscope <= "1221") {
                                        signe = "Sagittaire";
                                    } else {
                                        if ((horoscope >= "1222" && horoscope <= "1231") || (horoscope >= "0101" && horoscope <= "0120")) {
                                            signe = "Capricorne";
                                        } else {
                                            if (horoscope >= "0121" && horoscope <= "0218") {
                                                signe = "Verseau";
                                            } else {
                                                if (horoscope >= "0219" && horoscope <= "0320") {
                                                    signe = "Poisson";
                                                } else {
                                                    signe = "Erreur";
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return signe;
}

function fct_image(le_signe) {
    var lien_image = "";
    switch (le_signe) {
        case "Belier":
            lien_image = "https://cdn.radiofrance.fr/s3/cruiser-production/2018/03/29fa4466-483c-4be8-b761-e1d084c6c195/870x489_gettyimages-686331982_2.jpg";
            break;
        case "Taureau":
            lien_image = "https://lvdneng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2018/10/08/node_464640/39779073/public/2018/10/08/B9717179125Z.1_20181008080815_000%2BGJ9C6DCHU.2-0.jpg?itok=SlowXxnl";
            break;
        case "Gemeaux":
            lien_image = "https://academie.ca/dist/img/prixgemeaux/logo-footer.png";
            break;
        case "Cancer":
            lien_image = "https://www.info-radiologie.ch/metastase-cerebral-poumon/fullsize/metastase-cerebral-_1_fs.jpg";
            break;
        case "Lion":
            lien_image = "http://cdn.24.co.za/files/Cms/General/d/5470/79958d58e26a45fa8bfb87e6ed155e18.jpg";
            break;
        case "Vierge":
            lien_image = "https://www.viergemiraculeuse.com/wp-content/uploads/2014/03/72cdb965.jpg";
            break;
        case "Balance":
            lien_image = "https://www.point2vente.com/1165-thickbox_default/balance-kern-fob-balance-poids-prix.jpg";
            break;
        case "Scorpion":
            lien_image = "https://frontiersinblog.files.wordpress.com/2019/06/frontiers-in-ecology-and-evolution-scorpion-venom.jpg";
            break;
        case "Sagittaire":
            lien_image = "https://terreurterreur.files.wordpress.com/2014/02/centaure.jpg";
            break;
        case "Capricorne":
            lien_image = "https://cdn.pixabay.com/photo/2017/08/20/12/06/capricorn-2661507_960_720.jpg";
            break;
        case "Verseau":
            lien_image = "https://udesdurable.files.wordpress.com/2013/04/logo-recto-verso.png";
            break;
        case "Poisson":
            lien_image = "https://mediasv6.truffaut.com/Articles/jpg/0048000/48412_001_350.jpg";
            break;
        default:
            lien_image = "https://i.pinimg.com/originals/f8/45/76/f8457627650bb706f11bc97f9c931e56.jpg";
    }
    return lien_image;
}

function fct_description(le_signe) {
    var description = "";
    switch (le_signe) {
        case "Belier":
            description = "La vie vous apportera malheur: un belier foncera sur vous comme une voiture a 100km/h fonce dans un mur.";
            break;
        case "Taureau":
            description = "La vie vous apportera malheur: un taureau foncera sur vous comme une voiture a 100km/h fonce dans un mur.";
            break;
        case "Gemeaux":
            description = "Vous n'avez pas gagne de Prix Gemeaux. Vous etes simplement de signe Gemeaux. D'ailleurs, vous n'en gagnerez jamais.";
            break;
        case "Cancer":
            description = "Vous mourrez du cancer. Si on se fie a la tendance du 21e siecle, en effet.";
            break;
        case "Lion":
            description = "Vous avez aime le film Le Roi Lion? Eh bien vous finirez comme Mufassa: Mort d'une chute, pousse par un membre de votre famille.";
            break;
        case "Vierge":
            description = "La virginite, c'est la purete. La vie vous demande de procreer pour populer la Terre. La vie vous reserve un avenir impur.";
            break;
        case "Balance":
            description = "Vous vous balancerez doucement dans une balancoire. Mais tout le monde s'en balance.";
            break;
        case "Scorpion":
            description = "Vous irez bientot visiter un pays chaud. Un scorpion vous piquera et vous tuera.";
            break;
        case "Sagittaire":
            description = "Les gens de signe Sagitaire: S'agit-il de se taire?";
            break;
        case "Capricorne":
            description = "Les gens de signe Capricorne sont de grands copieurs: Un capricorne ressemble a un belier, mais ce signe existe deja! Vous manquez cruellement d'originalite.";
            break;
        case "Verseau":
            description = "Vous etes un grand gaspilleur: les gens de signe Verseau sont ceux qui versent de l'eau sur la neige pour la faire fondre ou qui arrosent leur asphalte: Mort a vous.";
            break;
        case "Poisson":
            description = "Les gens de signe Poisson ne s'attendent a nul autre que de pecher du poisson lorsqu'ils vont a la pêche.";
            break;
        default:
            description = "Erreur";
    }
    return description;
}