SystemUtil.CloseProcessByName "iexplore.exe"
SystemUtil.Run "iexplore.exe", "https://advantageonlineshopping.com"
For sendFeedback = 1 To 4 Step 1 @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("CONTINUE SHOPPING")_;_script infofile_;_ZIP::ssf7.xml_;_

Browser("Advantage Shopping").Page("Advantage Shopping").Link("Link").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("Link")_;_script infofile_;_ZIP::ssf8.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebList("categoryListboxContactUs").Select "#" & sendFeedback @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebList("categoryListboxContactUs")_;_script infofile_;_ZIP::ssf9.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebList("productListboxContactUs").Select "#" & sendFeedback @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebList("productListboxContactUs")_;_script infofile_;_ZIP::ssf10.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("emailContactUs").Set "2@2.com" @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("emailContactUs")_;_script infofile_;_ZIP::ssf11.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("subjectTextareaContactUs").Set "Prueba UFT" @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("subjectTextareaContactUs")_;_script infofile_;_ZIP::ssf12.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("send_btnundefined").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("send btnundefined")_;_script infofile_;_ZIP::ssf13.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("CONTINUE SHOPPING").Check CheckPoint("CONTINUE SHOPPING") @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("CONTINUE SHOPPING")_;_script infofile_;_ZIP::ssf14.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("CONTINUE SHOPPING").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("CONTINUE SHOPPING")_;_script infofile_;_ZIP::ssf15.xml_;_
next @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("send btnundefined")_;_script infofile_;_ZIP::ssf6.xml_;_
SystemUtil.CloseProcessByName "iexplore.exe"

