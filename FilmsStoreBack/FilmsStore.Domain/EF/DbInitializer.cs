using System.Collections.Generic;
using System.Linq;
using FilmsStore.Domain.Entities;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;

namespace FilmsStore.Domain.EF
{
    public class DbInitializer
    {
        public static async void Seed(IApplicationBuilder applicationBuilder)
        {
            using (var serviceScope = applicationBuilder.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope())
            {
                ApplicationContext context = serviceScope.ServiceProvider.GetService<ApplicationContext>();
                UserManager<User> userManager = serviceScope.ServiceProvider.GetService<UserManager<User>>();
                RoleManager<IdentityRole> roleManager = serviceScope.ServiceProvider.GetService<RoleManager<IdentityRole>>();

                if (!context.Users.Any())
                {
                    await roleManager.CreateAsync(new IdentityRole("admin"));
                    await roleManager.CreateAsync(new IdentityRole("user"));

                    var user = new User { UserName = "admin" };
                    IdentityResult result = await userManager.CreateAsync(user, "admin2018");
                    if (result.Succeeded)
                    {
                        await userManager.AddToRoleAsync(user, "admin");
                    }
                }
                if (!context.Films.Any())
                {
                    context.Films.Add(new Film
                    {
                        Name = "The Lake House",
                        Country = "United States",
                        Year = 2006,
                        Producer = "Doug Davison",
                        ImageUrl = "http://localhost:58038/images/lake_house/lake_house.jpg",
                        VideoUrl = "https://www.youtube.com/embed/V02lqEpbk2Y",
                        Genre = "Drama",
                        Description = "A lonely doctor, who once occupied an unusual lakeside house," +
                        " begins exchanging love letters with its former resident, a frustrated architect." +
                        " They must try to unravel the mystery behind their extraordinary romance before it's too late.",
                        Images = new List<Image>()
                        {
                            new Image(){Url="https://i.ytimg.com/vi/kjlVXF9NWiU/maxresdefault.jpg" },
                            new Image(){Url="http://hd-kino.net/uploads/posts/2018-01/85_The-Lake-House-1363828.jpg" },
                            new Image(){Url="https://www.kino-teatr.ru/movie/kadr/22889/22616.jpg" },
                            new Image(){Url="http://media.filmz.ru/photos/full/filmz.ru_f_5177.jpg" },
                            new Image(){Url="https://cdn2.img.ria.ru/images/101655/55/1016555521.jpg" },
                            new Image(){Url="https://www.startfilm.ru/images/base/film/21184_/613.jpg" },
                        }
                    });
                    context.Films.Add(new Film
                    {
                        Name = "Lucky Number Slevin",
                        Country = "Germany, Canada, United Kingdom, United States",
                        Year = 2006,
                        Producer = "Chris Roberts",
                        ImageUrl = "http://localhost:58038/images/Slevin/lucky-number-slevin.jpg",
                        VideoUrl = "https://www.youtube.com/embed/fVIUEcizkPc",
                        Genre = "Drama",
                        Description = "Lucky Number Slevin is a thriller that twists and turns its way through an underworld of crime and revenge." +
                        " Set in New York City, a case of mistaken identity lands Slevin (Hartnett) into the middle of a war being plotted by two of" +
                        " the city's most rival crime bosses.",
                        Images = new List<Image>()
                        {
                            new Image(){Url="http://st.kp.yandex.net/im/kadr/1/9/1/kinopoisk.ru-Lucky-Number-Slevin-1914053.jpg" },
                            new Image(){Url="https://www.film.ru/sites/default/files/afisha/SLEVN/450/09.jpg" },
                            new Image(){Url="http://kino.ural.ru/movies/lucky_number_slevin/01.jpg" },
                            new Image(){Url="https://www.vokrug.tv/pic/product/3/0/e/4/30e42974e6a50c9c00511e842391b4ba.jpeg" },
                            new Image(){Url="https://www.kinonews.ru/insimgs/trailer/trailer22456.jpg" },
                            new Image(){Url="http://forumcinemaslv.blob.core.windows.net/1012/Event_5802/gallery/6247aed763.jpg" },
                        }
                    });
                    context.Films.Add(new Film
                    {
                        Name = "Catch Me If You Can",
                        Country = "United States",
                        Year = 2002,
                        Producer = "Steven Spielberg",
                        ImageUrl = "http://localhost:58038/images/Catch_me/catch_me.jpg",
                        VideoUrl = "https://www.youtube.com/embed/71rDQ7z4eFg",
                        Genre = "Drama",
                        Description = "A seasoned FBI agent pursues Frank Abagnale Jr. who, before his 19th birthday, successfully forged millions of dollars" +
                        " worth of checks while posing as a Pan Am pilot, a doctor, and a legal prosecutor.",
                        Images = new List<Image>()
                        {
                            new Image(){Url="https://www.film.ru/sites/default/files/movies/frames/catch-me-if-you-can-24.jpg" },
                            new Image(){Url="https://www.film.ru/sites/default/files/movies/frames/catch-me-if-you-can-36.jpg" },
                            new Image(){Url="http://kinomania.net/images/still_frame_catch-me-if-you-can-7.jpg" },
                            new Image(){Url="https://www.film.ru/sites/default/files/movies/frames/catch-me-if-you-can-26.jpg" },
                            new Image(){Url="http://ic.pics.livejournal.com/samolet_blog/23344533/50720/50720_original.jpg" },
                            new Image(){Url="http://epizod.tv/sites/default/files/frames/5635435435432542.jpg" },
                        }
                    });
                    context.Films.Add(new Film
                    {
                        Name = "The Social Network",
                        Country = "United States",
                        Year = 2010,
                        Producer = "Scott Rudin",
                        ImageUrl = "http://localhost:58038/images/Social_Network/social_network.jpg",
                        VideoUrl = "https://www.youtube.com/embed/lB95KLmpLR4",
                        Genre = "Biography",
                        Description = "Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook," +
                        "but is later sued by two brothers who claimed he stole their idea," +
                        "and the co - founder who was later squeezed out of the business.",
                        Images = new List<Image>()
                        {
                            new Image(){Url="http://themacguffinmen.com/wp-content/uploads/2012/07/socialnetwork_.jpeg" },
                            new Image(){Url="http://topfilmonline.ru/uploads/posts/2017-02/1486237634-864378275-socialnaya-set-2.jpg" },
                            new Image(){Url="http://pics.kinokadr.ru/films/s/socialnetwork/gallery/22.jpg" },
                            new Image(){Url="http://topfilmonline.ru/uploads/posts/2017-02/1486237633-951023447-socialnaya-set-1.jpg" },
                            new Image(){Url="http://st.kinopoisk.ru/im/kadr/1/3/6/kinopoisk.ru-The-Social-Network-1360520.jpg" },
                            new Image(){Url="http://www.kritikanstvo.ru/movies/s/socialnetwork/images/socialnetwork_2828.jpg" },
                        }
                    });
                    context.Films.Add(new Film
                    {
                        Name = "Monsters, Inc.",
                        Country = "United States",
                        Year = 2001,
                        Producer = "Darla K.Anderson",
                        ImageUrl = "http://localhost:58038/images/Monsters/Monsters_corporation.jpg",
                        VideoUrl = "https://www.youtube.com/embed/zatM_LInqBk",
                        Genre = "Animation",
                        Description = "In order to power the city, monsters have to scare children so that they scream." +
                        " However, the children are toxic to the monsters, and after a child gets through," +
                        " 2 monsters realize things may not be what they think.",
                        Images = new List<Image>()
                        {
                            new Image(){Url="https://img.getbg.net/upload/full/1/8072_korporaciya-monstrov_or_monsters-inc_1024x768_(www.GetBg.net).jpg" },
                            new Image(){Url="http://topfilmonline.ru/uploads/posts/2017-02/1486175002-1848416947-korporaciya-monstrov-2.jpg" },
                            new Image(){Url="https://coubsecure-s.akamaihd.net/get/b135/p/coub/simple/cw_timeline_pic/3e2e98b1eec/a069b61d57090761029a7/big_1487849125_image.jpg" },
                            new Image(){Url="http://kino.ural.ru/movies/monsters_inc/09.jpg" },
                            new Image(){Url="http://hd-kinogo.net/uploads/posts/2015-04/1430069432_1370353487_korporaciya.monstrov.31.jpg" },
                            new Image(){Url="https://1.bp.blogspot.com/-anjz8eY7Dtg/U-lN2CEMTSI/AAAAAAAJRwU/TO7wLIYXk2k/s1600/01.jpg" },
                        }
                    });
                    context.Films.Add(new Film
                    {
                        Name = "Ostwind",
                        Country = "Deutschland",
                        Year = 2013,
                        Producer = "Andreas Ulmke-Smeaton",
                        ImageUrl = "http://localhost:58038/images/Ostwind/ostwind.jpg",
                        VideoUrl = "https://www.youtube.com/embed/bRaL1rXOwSM",
                        Genre = "Adventure",
                        Description = "A girl who thinks is not good at doing anything has to stay for the holidays with her grandmother at a riding stable." +
                        " There she discovers her interest in horses, riding and more and what she is good in.",
                        Images = new List<Image>()
                        {
                            new Image(){Url="https://data.puzzle.at/.5/xxl-teile-ausritt-mit-ostwind-150-teile--puzzle.57620-1.fs.jpg" },
                            new Image(){Url="https://www.thomassaddlery.it/image/cache/data/journal2/blog/liberi-nel-vento-1102x1021h.jpg" },
                            new Image(){Url="https://www.prisma.de/data/img/default/455/4540642_3059df1de22e147faa9afebc545b456c.jpg" },
                            new Image(){Url="https://www.lungaukultur.at/wp-content/uploads/2014/10/ostwind-1-Custom.jpg" },
                            new Image(){Url="https://bilder.wunschliste.de/epg/sf2/sf2_171008_1300_1ab52e9a_ostwind_b.jpg" },
                            new Image(){Url="https://bilder.buecher.de/zusatz/37/37707/37707646_deta_2.jpg" },
                        }
                    });
                    context.Films.Add(new Film
                    {
                        Name = "Bruce Almighty",
                        Country = "United States",
                        Year = 2003,
                        Producer = "Tom Shadyac",
                        ImageUrl = "http://localhost:58038/images/Bruce/bruce.jpg",
                        VideoUrl = "https://www.youtube.com/embed/3uX0wjl9PzM",
                        Genre = "Comedy",
                        Description = "A guy who complains about God too often is given almighty powers to teach him how difficult it is to run the world.",
                        Images = new List<Image>()
                        {
                            new Image(){Url="https://avatars.mds.yandex.net/get-kino-vod-films-gallery/33804/2a00000151e8742d5f570c6009dffbb5775d/280x178_2" },
                            new Image(){Url="http://dujev.ru/wp-content/uploads/2011/10/Bruce-Almighty-2003.jpg" },
                            new Image(){Url="http://wikikino.com/wp-content/uploads/2012/03/Bruce-Almighty-kart1.png" },
                            new Image(){Url="http://wikikino.com/wp-content/uploads/2012/03/Bruce-Almighty-kart3.jpg" },
                            new Image(){Url="https://pic.kino.mail.ru/260893/" },
                            new Image(){Url="http://img.bibo.kz/?9442531.jpg" },
                        }
                    });
                    context.Films.Add(new Film
                    {
                        Name = "Doctor Strange",
                        Country = "United States",
                        Year = 2016,
                        Producer = "Kevin Feige",
                        ImageUrl = "http://localhost:58038/images/Strange/Doctor_Strange.jpg",
                        VideoUrl = "https://www.youtube.com/embed/HSzx-zryEgM",
                        Genre = "Action",
                        Description = "While on a journey of physical and spiritual healing," +
                        " a brilliant neurosurgeon is drawn into the world of the mystic arts.",
                        Images = new List<Image>()
                        {
                            new Image(){Url="https://www.sideshowtoy.com/wp-content/uploads/2016/09/marvel-doctor-strange-sixth-scale-hot-toys-feature-902854-1.jpg" },
                            new Image(){Url="https://pmcvariety.files.wordpress.com/2016/11/doctor-strange.jpg?w=1000" },
                            new Image(){Url="https://pmcvariety.files.wordpress.com/2016/10/doctor-strange1.jpg?w=1000&h=563&crop=1" },
                            new Image(){Url="https://pmcvariety.files.wordpress.com/2013/06/doctor-strange-3.jpg?w=1000&h=563&crop=1" },
                            new Image(){Url="https://media0dk-a.akamaihd.net/41/27/f1ffdad509175878b0b02df03a3a7ee6-dr-strange-bothers.jpg" },
                            new Image(){Url="https://static1.gamespot.com/uploads/original/1444/14446008/3152630-doctorstrange_fight.jpg" },
                        }
                    });

                    context.Films.Add(new Film
                    {
                        Name = "Passengers",
                        Country = "United States",
                        Year = 2016,
                        Producer = "Stephen Hamel",
                        ImageUrl = "http://localhost:58038/images/Passengers/passengers.jpg",
                        VideoUrl = "https://www.youtube.com/embed/7BWWWQzTpNU",
                        Genre = "Drama",
                        Description = "A spacecraft traveling to a distant colony planet and transporting thousands" +
                        " of people has a malfunction in its sleep chambers. As a result, two passengers are awakened 90 years early.",
                        Images = new List<Image>()
                        {
                            new Image(){Url="https://amp.thisisinsider.com/images/585c641255b10620008b4739-750-563.jpg" },
                            new Image(){Url="https://nerdist.com/wp-content/uploads/2016/09/Passengers-970x545.jpg" },
                            new Image(){Url="http://cdn-static.denofgeek.com/sites/denofgeek/files/styles/main_wide/public/2017/05/screen_shot_2017-05-06_at_14.40.48.png?itok=In-wyl0L" },
                            new Image(){Url="http://www.pajiba.com/images/2016/Passengers-Chris-Pratt-Jennifer-Lawrence-1-thumb-600x337-170495.jpg" },
                            new Image(){Url="https://look.tm/statics/images/post/636175979580929214-e-104-as-0220-frame-1098-v11098-r7127659.jpg" },
                            new Image(){Url="http://cdn.collider.com/wp-content/uploads/2016/12/passengers-images-5.jpg" },
                        }
                    });
                    context.Films.Add(new Film
                    {
                        Name = "Inside Out",
                        Country = "United States",
                        Year = 2015,
                        Producer = "Jonas Rivera",
                        ImageUrl = "https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_.jpg",
                        VideoUrl = "https://www.youtube.com/embed/yRUAzGQ3nSY",
                        Genre = "Animation",
                        Description = "After young Riley is uprooted from her Midwest life and moved to San Francisco," +
                        " her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.",
                        Images = new List<Image>()
                        {
                            new Image(){Url="https://www.mindful.org/wp-content/uploads/2015/07/InsideOut556500e6a2be0-2040.0.jpg" },
                            new Image(){Url="https://timedotcom.files.wordpress.com/2015/06/inside-out-concept-art-01.jpg" },
                            new Image(){Url="http://kindredmedia.org/wp-content/uploads/BIng-Bong-Inside-Out-e1458587597390.jpg" },
                            new Image(){Url="https://www.repstatic.it/content/nazionale/img/2017/06/22/180142004-a435bca6-07c6-454e-920c-cdfebab51535.jpg" },
                            new Image(){Url="https://anima.pro/wp-content/uploads/Inside-Out-700x350.jpg" },
                            new Image(){Url="http://enjoyurlife.ru/wp-content/uploads/2015/10/12-critics-inside-out.w529.h352.2x.jpg" },
                        }
                    });
                    context.Films.Add(new Film
                    {
                        Name = "Kung Fu Panda",
                        Country = "United States",
                        Year = 2008,
                        Producer = "Melissa Cobb",
                        ImageUrl = "https://images-na.ssl-images-amazon.com/images/I/517M%2BF7msHL.jpg",
                        VideoUrl = "https://www.youtube.com/embed/PXi3Mv6KMzY",
                        Genre = "Animation",
                        Description = "balance: However, the Dragon Warrior mantle is supposedly mistaken to be bestowed upon an obese panda who is a tyro in martial arts.",
                        Images = new List<Image>()
                        {
                            new Image(){Url="http://papelarrozkantinhodobolo.com.br/wp-content/uploads/2017/08/11-2-1-600x500.jpg" },
                            new Image(){Url="https://media1.fdncms.com/sacurrent/imager/u/original/2501687/kung-fu-panda-3.jpg" },
                            new Image(){Url="https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2011/11/panda_a_0.jpg" },
                            new Image(){Url="http://lamcdn.net/lookatme.ru/post_image-image/ZtE-G5DTDz8-q7oR-ofEvw-article.jpg" },
                            new Image(){Url="http://www.filmclub.nl/images/screenshots/groot/11152_3_Kung-Fu-Panda-3-03.jpg" },
                            new Image(){Url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKzw7itA-9rgGz59srQXvuqRa6U6nhIlWwhb8PIrAyHvZQ8PVw" },
                        }
                    });
                    context.Films.Add(new Film
                    {
                        Name = "The Day After Tomorrow",
                        Country = "United States",
                        Year = 2004,
                        Producer = "Roland Emmerich",
                        ImageUrl = "https://images-na.ssl-images-amazon.com/images/I/A1JtBGpgX2L._RI_.jpg",
                        VideoUrl = "https://www.youtube.com/embed/gvSFCUpRrhA",
                        Genre = "Action",
                        Description = "Jack Hall, paleoclimatologist, must make a daring trek from Washington," +
                        " D.C. to New York City, to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.",
                        Images = new List<Image>()
                        {
                            new Image(){Url="http://images1.fanpop.com/images/photos/2200000/The-Day-After-Tomorrow-stills-the-day-after-tomorrow-2276691-1400-935.jpg" },
                            new Image(){Url="http://szabadsag.ro/image/journal/article?img_id=3755369&t=1523970924845" },
                            new Image(){Url="https://i2.wp.com/www.tailslate.net/wp-content/uploads/2004/05/The-Day-After-Tomorrow-Emmy-Rossum-Jake-Gyllenhaal.jpg" },
                            new Image(){Url="http://images.amcnetworks.com/ifccenter.com/wp-content/uploads/2017/01/the-day-after-tomorrow_1280x720.jpg" },
                            new Image(){Url="https://vignette.wikia.nocookie.net/rifftrax/images/c/c6/Dayafter.jpg/revision/latest?cb=20140917005747" },
                            new Image(){Url="http://entertainment.ie//images_content/rectangle/620x372/The-Day-After-Tomorrow-DI.jpg" },
                        }
                    });
                    context.Films.Add(new Film
                    {
                        Name = "Pirates of the Caribbean",
                        Country = "United States",
                        Year = 2003,
                        Producer = "Jerry Bruckheimer",
                        ImageUrl = "http://localhost:58038/images/Pirates/pirates.jpg",
                        VideoUrl = "https://www.youtube.com/embed/naQr0uTrH_s",
                        Genre = "Action",
                        Description = "Blacksmith Will Turner teams up with eccentric pirate \"Captain\"" +
                        " Jack Sparrow to save his love, the governor's daughter, from Jack's former pirate allies, who are now undead.",
                        Images = new List<Image>()
                        {
                            new Image(){Url="http://images4.fanpop.com/image/photos/23100000/pir8s-rule-pirates-of-the-caribbean-1-2-3-and-4-23116534-1280-800.jpg" },
                            new Image(){Url="http://www.kickseat.com/storage/pirates_of_the_caribbean__1-1400x1050.jpg?__SQUARESPACE_CACHEVERSION=1343593804640" },
                            new Image(){Url="https://ohmy.disney.com/wp-content/uploads/2015/01/11-Things-You-Didnt-Know-About-Pirates-of-the-Caribbean-The-Curse-of-the-Black-Pearl-10.jpg" },
                            new Image(){Url="http://blog-imgs-44.fc2.com/p/r/e/prettieststar/201409232318377d7.jpg" },
                            new Image(){Url="https://cdn.empireonline.com/jpg/80/0/0/1000/563/0/north/0/0/0/0/0/t/films/22/images/jpRpigNQUjNlfx0gYRBJ30tQIOl.jpg" },
                            new Image(){Url="https://gfx.dlastudenta.pl/fotoalbum/3cb/a81/c5c/6ca/993340" },
                        }
                    });
                    context.Films.Add(new Film
                    {
                        Name = "The Maze Runner",
                        Country = "United States",
                        Year = 2014,
                        Producer = "Ellen Goldsmith",
                        ImageUrl = "http://localhost:58038/images/maze_runner/maze_runner.jpg",
                        VideoUrl = "https://www.youtube.com/embed/AwwbhhjQ9Xk",
                        Genre = "Action,",
                        Description = "Thomas is deposited in a community of boys after his memory is erased," +
                        " soon learning they're all trapped in a maze that will require him to join forces with fellow \"runners\" for a shot at escape.",
                        Images = new List<Image>()
                        {
                            new Image(){Url="https://i0.wp.com/www.thatmomentin.com/wp-content/uploads/2016/11/Screen-Shot-2016-11-21-at-11.50.20-PM.png?resize=750%2C430" },
                            new Image(){Url="https://vignette.wikia.nocookie.net/mazerunner/images/8/89/Minho_pel%C3%ADcula_3.jpg/revision/latest?cb=20141003145508&path-prefix=es" },
                            new Image(){Url="https://rollingout.com/wp-content/uploads/2015/09/mrst.jpg?x72273" },
                            new Image(){Url="http://filmblerg.com/wp-content/uploads/2014/09/tumblr_n06tylyoQ51rskd87o1_1280.png.jpeg" },
                            new Image(){Url="https://www.hypable.com/wp-content/uploads/2014/09/The-Maze-Runner-Rescue.jpg" },
                            new Image(){Url="https://images.fandango.com/r1.0.505/ImageRenderer/1040/650/redesign/areas/movie/moviesubpages/img/noimage_900x900.jpg/175769/images/masterrepository/fandango/175769/175769_themazerunner-mv-21.jpg" },
                        }
                    });
                    context.Films.Add(new Film
                    {
                        Name = "The Sixth Sense",
                        Country = "United States",
                        Year = 1999,
                        Producer = "Frank Marshall",
                        ImageUrl = "http://localhost:58038/images/sixth_sense/sixth_sense.jpg",
                        VideoUrl = "https://www.youtube.com/embed/VG9AGf66tXM",
                        Genre = "Mystery",
                        Description = "A boy who communicates with spirits seeks the help of a disheartened child psychologist.",
                        Images = new List<Image>()
                        {
                            new Image(){Url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThcBC-fFxbEX34G4-2SRimhpH7BLSF9frXqmzTPv-5WGrFcHVB" },
                            new Image(){Url="http://www.itsyourpicshow.com/wp-content/uploads/2017/08/6th-sense.jpg" },
                            new Image(){Url="http://montagesmagazine.com/files/2014/01/aaaa-toppbilde-alt-1-1080x465.jpg" },
                            new Image(){Url="https://imgix.bustle.com/rehost/2016/9/13/67b610eb-b969-4cc6-85c2-81aa47bbfd1c.jpg?w=970&h=582&fit=crop&crop=faces&auto=format&q=70" },
                            new Image(){Url="http://www.ilsussidiario.net/img/_THUMBWEB/the_sixth_sense_il_sesto_senso_film_thumb660x453.jpg" },
                            new Image(){Url="http://www.rirca.es/wp-content/uploads/2017/03/sixth_large.jpg" },
                        }
                    });
                    context.Films.Add(new Film
                    {
                        Name = "Back to the Future",
                        Country = "United States",
                        Year = 1985,
                        Producer = "Bob Gale",
                        ImageUrl = "http://localhost:58038/images/Back_Future/Back_To_The_Future.jpg",
                        VideoUrl = "https://www.youtube.com/embed/qvsgGtivCgs",
                        Genre = "Adventure",
                        Description = "Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into" +
                        " the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.",
                        Images = new List<Image>()
                        {
                            new Image(){Url="https://www.wannart.com/wp-content/uploads/2018/01/back-to-the-future-cover-900x580.jpg" },
                            new Image(){Url="https://www.slashfilm.com/wp/wp-content/images/Back-to-the-Future2.jpg" },
                            new Image(){Url="http://farm9.staticflickr.com/8311/8042356646_649a43d3a7.jpg" },
                            new Image(){Url="https://static1.squarespace.com/static/524fc875e4b05c977ba53361/t/5b377656352f5378b795ed17/1530361441939/Think+McFly+Think.jpg" },
                            new Image(){Url="https://thedailybanter.com/wp-content/uploads/2018/05/back.jpg" },
                            new Image(){Url="https://s.aolcdn.com/hss/storage/midas/bf97edc4087a1a163307a58eeb2d747d/202827504/normal_scnet_bttf2_0058.jpg" },
                        }
                    });
                }
                context.SaveChanges();
            }
        }
    }
}
