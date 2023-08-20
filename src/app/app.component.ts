import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookRecommendations';

  books: {
    Title: string;
    Author: string;
    ISBN: string;
    category: string;
  }[] = [
    // Fiction
    {"Title": "1984", "Author": "George Orwell", "ISBN": "978-0451524935", "category": "Fiction"},
    {"Title": "The Great Gatsby", "Author": "F. Scott Fitzgerald", "ISBN": "978-0743273565", "category": "Fiction"},
    {"Title": "One Hundred Years of Solitude", "Author": "Gabriel García Márquez", "ISBN": "978-0060883287", "category": "Fiction"},
    {"Title": "Brave New World", "Author": "Aldous Huxley", "ISBN": "978-0060850524", "category": "Fiction"},
    {"Title": "The Catcher in the Rye", "Author": "J.D. Salinger", "ISBN": "978-0316769174", "category": "Fiction"},
    {"Title": "The Lord of the Rings", "Author": "J.R.R. Tolkien", "ISBN": "978-0618640157", "category": "Fiction"},
    {"Title": "The Handmaid's Tale", "Author": "Margaret Atwood", "ISBN": "978-0385490818", "category": "Fiction"},
    {"Title": "The Alchemist", "Author": "Paulo Coelho", "ISBN": "978-0061122415", "category": "Fiction"},
    // {"Title": "War and Peace", "Author": "Leo Tolstoy", "ISBN": "978-0140447934", "category": "Fiction"},
  
    // Science Fiction
    {"Title": "Neuromancer", "Author": "William Gibson", "ISBN": "978-0441569595", "category": "Science Fiction"},
    {"Title": "Foundation", "Author": "Isaac Asimov", "ISBN": "978-0553293357", "category": "Science Fiction"},
    {"Title": "Ender's Game", "Author": "Orson Scott Card", "ISBN": "978-0812550702", "category": "Science Fiction"},
    {"Title": "The Martian", "Author": "Andy Weir", "ISBN": "978-0553418026", "category": "Science Fiction"},
    {"Title": "Snow Crash", "Author": "Neal Stephenson", "ISBN": "978-0553380958", "category": "Science Fiction"},
    {"Title": "Hyperion", "Author": "Dan Simmons", "ISBN": "978-0553283686", "category": "Science Fiction"},
    {"Title": "The Hunger Games", "Author": "Suzanne Collins", "ISBN": "978-0439023481", "category": "Science Fiction"},
    {"Title": "The Left Hand of Darkness", "Author": "Ursula K. Le Guin", "ISBN": "978-0441478125", "category": "Science Fiction"},
    {"Title": "The Three-Body Problem", "Author": "Cixin Liu", "ISBN": "978-0765377067", "category": "Science Fiction"},
  
    // Mystery
    {"Title": "Gone Girl", "Author": "Gillian Flynn", "ISBN": "978-0307588371", "category": "Mystery"},
    // {"Title": "The Girl with the Dragon Tattoo", "Author": "Stieg Larsson", "ISBN": "978-0307949486", "category": "Mystery"},
    {"Title": "In the Woods", "Author": "Tana French", "ISBN": "978-0143113492", "category": "Mystery"},
    // {"Title": "The Hound of the Baskervilles", "Author": "Arthur Conan Doyle", "ISBN": "978-0141332431", "category": "Mystery"},
    {"Title": "Big Little Lies", "Author": "Liane Moriarty", "ISBN": "978-0399587191", "category": "Mystery"},
    {"Title": "The No. 1 Ladies' Detective Agency", "Author": "Alexander McCall Smith", "ISBN": "978-1400034772", "category": "Mystery"},
    {"Title": "The Silence of the Lambs", "Author": "Thomas Harris", "ISBN": "978-0312924584", "category": "Mystery"},
    {"Title": "The Cuckoo's Calling", "Author": "Robert Galbraith (J.K. Rowling)", "ISBN": "978-0316206846", "category": "Mystery"},
    {"Title": "The Woman in White", "Author": "Wilkie Collins", "ISBN": "978-0141439617", "category": "Mystery"},
  
    // Biography
    {"Title": "The Diary of a Young Girl", "Author": "Anne Frank", "ISBN": "978-0553577129", "category": "Biography"},
    {"Title": "Malcolm X: A Life of Reinvention", "Author": "Manning Marable", "ISBN": "978-0143120322", "category": "Biography"},
    {"Title": "The Wright Brothers", "Author": "David McCullough", "ISBN": "978-1476728742", "category": "Biography"},
    {"Title": "Unbroken: A World War II Story of Survival, Resilience, and Redemption", "Author": "Laura Hillenbrand", "ISBN": "978-0812974492", "category": "Biography"},
    {"Title": "Einstein: His Life and Universe", "Author": "Walter Isaacson", "ISBN": "978-0743264747", "category": "Biography"},
    {"Title": "Steve Jobs: The Man Who Thought Different", "Author": "Karen Blumenthal", "ISBN": "978-1250015570", "category": "Biography"},
    {"Title": "The Immortal Life of Henrietta Lacks", "Author": "Rebecca Skloot", "ISBN": "978-1400052189", "category": "Biography"},
    {"Title": "Born a Crime: Stories from a South African Childhood", "Author": "Trevor Noah", "ISBN": "978-0399588174", "category": "Biography"},
    {"Title": "Into the Wild", "Author": "Jon Krakauer", "ISBN": "978-0385486804", "category": "Biography"},
  
    // History
    {"Title": "The Guns of August", "Author": "Barbara W. Tuchman", "ISBN": "978-0345476098", "category": "History"},
    {"Title": "A Short History of Nearly Everything", "Author": "Bill Bryson", "ISBN": "978-0767908184", "category": "History"},
    {"Title": "1776", "Author": "David McCullough", "ISBN": "978-0743226721", "category": "History"},
    {"Title": "Sapiens: A Brief History of Humankind", "Author": "Yuval Noah Harari", "ISBN": "978-0062316097", "category": "History"},
    {"Title": "The Devil in the White City", "Author": "Erik Larson", "ISBN": "978-0375725609", "category": "History"},
    {"Title": "The Reformation: A History", "Author": "Diarmaid MacCulloch", "ISBN": "978-0143035381", "category": "History"},
    {"Title": "The Warmth of Other Suns", "Author": "Isabel Wilkerson", "ISBN": "978-0679763888", "category": "History"},
    {"Title": "1491: New Revelations of the Americas Before Columbus", "Author": "Charles C. Mann", "ISBN": "978-1400032051", "category": "History"},
  
    // Self-Help
    {"Title": "Atomic Habits", "Author": "James Clear", "ISBN": "978-0735211292", "category": "Self-Help"},
    {"Title": "The Subtle Art of Not Giving a F*ck", "Author": "Mark Manson", "ISBN": "978-0062457714", "category": "Self-Help"},
    // {"Title": "The 7 Habits of Highly Effective People", "Author": "Stephen R. Covey", "ISBN": "978-1982137274", "category": "Self-Help"},
    {"Title": "You Are a Badass", "Author": "Jen Sincero", "ISBN": "978-0762447695", "category": "Self-Help"},
    {"Title": "Daring Greatly", "Author": "Brené Brown", "ISBN": "978-1592408412", "category": "Self-Help"},
    {"Title": "Mindset: The New Psychology of Success", "Author": "Carol S. Dweck", "ISBN": "978-0345472328", "category": "Self-Help"},
    {"Title": "The Power of Now: A Guide to Spiritual Enlightenment", "Author": "Eckhart Tolle", "ISBN": "978-1577314806", "category": "Self-Help"},
    {"Title": "Drive: The Surprising Truth About What Motivates Us", "Author": "Daniel H. Pink", "ISBN": "978-1594484803", "category": "Self-Help"},
    {"Title": "The Gifts of Imperfection", "Author": "Brené Brown", "ISBN": "978-1592858491", "category": "Self-Help"},
  
    // Fantasy
    // {"Title": "A Song of Ice and Fire Series", "Author": "George R.R. Martin", "ISBN": "Varies by book", "category": "Fantasy"},
    {"Title": "The Name of the Wind", "Author": "Patrick Rothfuss", "ISBN": "978-0756404741", "category": "Fantasy"},
    {"Title": "Mistborn: The Final Empire", "Author": "Brandon Sanderson", "ISBN": "978-0765311788", "category": "Fantasy"},
    // {"Title": "The Wheel of Time Series", "Author": "Robert Jordan", "ISBN": "Varies by book", "category": "Fantasy"},
    {"Title": "The Lies of Locke Lamora", "Author": "Scott Lynch", "ISBN": "978-0553588941", "category": "Fantasy"},
    {"Title": "Harry Potter and the Sorcerer's Stone", "Author": "J.K. Rowling", "ISBN": "978-0590353427", "category": "Fantasy"},
    {"Title": "The Way of Kings", "Author": "Brandon Sanderson", "ISBN": "978-0765326355", "category": "Fantasy"},
    // {"Title": "The Chronicles of Narnia Series", "Author": "C.S. Lewis", "ISBN": "Varies by book", "category": "Fantasy"},
    {"Title": "The Magicians", "Author": "Lev Grossman", "ISBN": "978-0452296299", "category": "Fantasy"},
  
    // Science
    {"Title": "The Immortal Life of Henrietta Lacks", "Author": "Rebecca Skloot", "ISBN": "978-1400052189", "category": "Science"},
    {"Title": "The Selfish Gene", "Author": "Richard Dawkins", "ISBN": "978-0198788607", "category": "Science"},
    {"Title": "A Short History of Nearly Everything", "Author": "Bill Bryson", "ISBN": "978-0767908184", "category": "Science"},
    {"Title": "Astrophysics for People in a Hurry", "Author": "Neil deGrasse Tyson", "ISBN": "978-0393609394", "category": "Science"},
    {"Title": "The Elegant Universe", "Author": "Brian Greene", "ISBN": "978-0393058581", "category": "Science"},
    {"Title": "The Structure of Scientific Revolutions", "Author": "Thomas S. Kuhn", "ISBN": "978-0226458083", "category": "Science"},
    {"Title": "A Brief History of Time", "Author": "Stephen Hawking", "ISBN": "978-0553380163", "category": "Science"},
    {"Title": "The Gene: An Intimate History", "Author": "Siddhartha Mukherjee", "ISBN": "978-1476733500", "category": "Science"},
  
    // Romance
    {"Title": "Outlander", "Author": "Diana Gabaldon", "ISBN": "978-0440423201", "category": "Romance"},
    {"Title": "The Rosie Project", "Author": "Graeme Simsion", "ISBN": "978-1476729091", "category": "Romance"},
    // {"Title": "Me Before You", "Author": "Jojo Moyes", "ISBN": "978-0143124542", "category": "Romance"},
    // {"Title": "Pride and Prejudice", "Author": "Jane Austen", "ISBN": "978-0143127468", "category": "Romance"},
    {"Title": "The Fault in Our Stars", "Author": "John Green", "ISBN": "978-0525478812", "category": "Romance"},
    {"Title": "The Notebook", "Author": "Nicholas Sparks", "ISBN": "978-1455582877", "category": "Romance"},
    {"Title": "The Kiss Quotient", "Author": "Helen Hoang", "ISBN": "978-0451490803", "category": "Romance"},
    {"Title": "Beach Read", "Author": "Emily Henry", "ISBN": "978-1984806734", "category": "Romance"},
    {"Title": "The Wedding Date", "Author": "Jasmine Guillory", "ISBN": "978-0399587665", "category": "Romance"},
    {"Title": "Red, White & Royal Blue", "Author": "Casey McQuiston", "ISBN": "978-1250316776", "category": "Romance"},
    {"Title": "The Hating Game", "Author": "Sally Thorne", "ISBN": "978-0062439598", "category": "Romance"},
  
    // Psychology
    {"Title": "Blink: The Power of Thinking Without Thinking", "Author": "Malcolm Gladwell", "ISBN": "978-0316010665", "category": "Psychology"},
    {"Title": "The Man Who Mistook His Wife for a Hat", "Author": "Oliver Sacks", "ISBN": "978-0684853949", "category": "Psychology"},
    {"Title": "The Psychopath Test: A Journey Through the Madness Industry", "Author": "Jon Ronson", "ISBN": "978-1594485756", "category": "Psychology"},
    {"Title": "Quiet: The Power of Introverts in a World That Can't Stop Talking", "Author": "Susan Cain", "ISBN": "978-0307352156", "category": "Psychology"},
    {"Title": "The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma", "Author": "Bessel van der Kolk", "ISBN": "978-0143127741", "category": "Psychology"},
    {"Title": "Influence: The Psychology of Persuasion", "Author": "Robert B. Cialdini", "ISBN": "978-0061241895", "category": "Psychology"},
    {"Title": "Mindsight: The New Science of Personal Transformation", "Author": "Daniel J. Siegel", "ISBN": "978-0553804706", "category": "Psychology"},
    {"Title": "The Paradox of Choice: Why More Is Less", "Author": "Barry Schwartz", "ISBN": "978-0060005689", "category": "Psychology"},
    {"Title": "Emotional Intelligence", "Author": "Daniel Goleman", "ISBN": "978-0553383713", "category": "Psychology"},
  ];
  
  
  

constructor(){
  // console.log(this.books);
  //  for(let i of this.books){
  //   console.log(i)
  //   for(let j in this.books[i]){
  //     console.log(this.books[i][j]);
  //  }
  // }
}

}
