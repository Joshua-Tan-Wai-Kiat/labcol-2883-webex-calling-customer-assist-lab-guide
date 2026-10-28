# Migrate Auto Attendant and Call Queue {#task-5-migrate-auto-attendant-and-call-queue-10-minutes}

<div class="page-meta">LABCOL-2883 <span>Task 5</span><span>10 minutes</span></div>
<p>In this phase we will complete the following tasks:</p>
<ol type="a">
<li><p>Utilize the Migration Utility to convert CUCM and CUC files into
Auto Attendant and Call Queue CSV files, enabling bulk import into
Control Hub</p></li>
<li><p>Assign Webex Calling Customer Assist license to users that will
be agents and Supervisor</p></li>
<li><p>Create office hours schedule and upload greeting audio
files</p></li>
</ol>
<aside class="lab-note" role="note"><p><strong>Note:</strong></p>
<p>At the start of the lab, Charles Holland, Anita Perez, Kellie Melby,
Taylor Bard are already assigned Webex Calling license and configured
with extension numbers.</p>

<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 30" class="screenshot-link" href="assets/images/image30.png"><img alt="Lab guide screenshot 30" class="lab-screenshot" height="334" loading="lazy" src="assets/images/image30.png" width="788"/></a></figure>
</aside>
## Step 1: Starting Migrate Features from UCM Tool {#step-1-starting-migrate-features-from-ucm-tool}

<p>Lets get started with the CUCM and CUC data import into the Control
Hub.</p>
<p>From Control Hub portal, under Services, click on “Updates and
Migrations”, then click on “Get Started” for Migrate Feature from
UCM</p>
<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 31" class="screenshot-link" href="assets/images/image31.png"><img alt="Lab guide screenshot 31" class="lab-screenshot" height="1004" loading="lazy" src="assets/images/image31.png" width="1558"/></a></figure>
<p>After clicking Get Started, select the UCM tar that you have saved
under folder “Walk-In-Lab-&gt; LABCOL &gt; CUCM” and upload by click on
“Choose a file” or drag and drop to the tool.</p>
<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 32" class="screenshot-link" href="assets/images/image32.png"><img alt="Lab guide screenshot 32" class="lab-screenshot" height="870" loading="lazy" src="assets/images/image32.png" width="1250"/></a></figure>
<p>Next is to upload Unity Call Handler Data Dump zip file. Select
“Unity Connection Call Hanlder Data Dump.zip” file from “Walk-In-Lab
&gt; LABCOL &gt; Unity Connection &gt; Call Handler Data Dump &gt; CSV”
folder and upload by drag-and-drop or by click on “Choose a file”.</p>
<aside class="lab-note" role="note"><p><strong><mark>Note: you might have to scroll down to see Unity upload
box, depending on your screen size.</mark> Suggested to zoom out to 80%
(Ctrl + “-“) for better view of the screen content.</strong></p></aside>
<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 33" class="screenshot-link" href="assets/images/image33.png"><img alt="Lab guide screenshot 33" class="lab-screenshot" height="1234" loading="lazy" src="assets/images/image33.png" width="2032"/></a></figure>
<p>After both files are uploaded, click the “Next” button on the bottom
left corner of the screen.</p>
<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 34" class="screenshot-link" href="assets/images/image34.png"><img alt="Lab guide screenshot 34" class="lab-screenshot" height="1644" loading="lazy" src="assets/images/image34.png" width="2490"/></a></figure>
<p>The processing and transformation process of this tool can take up to
8-10 minutes.</p>
<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 35" class="screenshot-link" href="assets/images/image35.png"><img alt="Lab guide screenshot 35" class="lab-screenshot" height="765" loading="lazy" src="assets/images/image35.png" width="1392"/></a></figure>
<p>While waiting for the process to finish we can work on a few prep
activities to get ready for the next phase. You can click “Done” toward
the bottom of the window; this will not abort the process. It will
continue the staging in the background.</p>

## Step 2: Upload Greeting Audio File for Auto Attendant {#step-2-upload-greeting-audio-file-for-auto-attendant}
<p>For this lab we will be uploading Greeting file exported from Unity
Connection using Call Handler Data Dump tool. This greeting audio file
will be used for Auto Attendant that will be created later in this
lab.</p>

<p>From Control Hub portal, under Services, click on “Calling”, then
select the “Features” tab. In the announcements tile card, click on “Add
New”.</p>

<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 36" class="screenshot-link" href="assets/images/image36.png"><img alt="Lab guide screenshot 36" class="lab-screenshot" height="551" loading="lazy" src="assets/images/image36.png" width="1203"/></a></figure>
<div class="instruction-panel"><div><p>Fill the rest of fields as shown below:</p>
<ul>
<li><p>Level = “Organization”</p></li>
<li><p>Label = “SupportDeskIVR”</p></li>
<li><p>Use greeting file as noted below.</p></li>
<li><p>Click “Save” to continue</p></li>
</ul></div><div><a aria-label="Enlarge Lab guide screenshot 37" class="screenshot-link" href="assets/images/image37.png"><img alt="Lab guide screenshot 37" class="lab-screenshot" height="1061" loading="lazy" src="assets/images/image37.png" width="1168"/></a></div></div>
<p>Click “Select File” or drag-and-drop to upload the greeting audio
file from “Walk-In-Lab-&gt;LABCOL-&gt;Unity Connection-&gt;Call Handler
Data Dump-&gt;CSV” folder.</p>
<p>The file to use is
“<strong>SupportDeskIVR_GREETING_STANDARD.WAV</strong>".</p>
<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 38" class="screenshot-link" href="assets/images/image38.png"><img alt="Lab guide screenshot 38" class="lab-screenshot" height="173" loading="lazy" src="assets/images/image38.png" width="830"/></a></figure>
<p>After successful upload, the new greeting file will be listed under
Announcement section as shown below.</p>
<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 39" class="screenshot-link" href="assets/images/image39.png"><img alt="Lab guide screenshot 39" class="lab-screenshot" height="551" loading="lazy" src="assets/images/image39.png" width="1687"/></a></figure>
<aside class="lab-note" role="note"><p><strong>Note:</strong></p>
<p>Test-to-Speech (TTS) for announcement is coming in March 2026, this
feature will enable efficient and quick prompts, greetings, and
announcements generation from text. It functions like a recorded WAV
file eliminating the need for manual recording.</p></aside>
## Step 3: Validate Location PSTN Type and Main number {#step-3-validate-location-pstn-type-and-main-number}
<p>At this step, you will be verifying PSTN type for dCloud
location.</p>
<ol type="1">
<li><p>Under Management, click on “Locations”</p></li>
<li><p>Click on “dCloud” &gt; navigate and click on “PSTN” tab</p></li>
<li><p>Verify that PSTN Connection = Premised-based PSTN, and a number
is assigned to the Main number field.</p></li>
</ol>
<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 40" class="screenshot-link" href="assets/images/image40.png"><img alt="Lab guide screenshot 40" class="lab-screenshot" height="751" loading="lazy" src="assets/images/image40.png" width="1672"/></a></figure>
<aside class="lab-note" role="note"><p><strong>Note:</strong></p>
<ul>
<li><p>If there is a caution symbol next to a location, it indicates
that <strong>no</strong> telephone number has been configured. Any type
of calls cannot be made or received until a number is set up.</p></li>
</ul>
<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 41" class="screenshot-link" href="assets/images/image41.png"><img alt="Lab guide screenshot 41" class="lab-screenshot" height="190" loading="lazy" src="assets/images/image41.png" width="1308"/></a></figure>
<ul>
<li><p>You can try to fix this yourself with a PowerShell script from
Workstation 1 desktop to re-add the main number and PSTN phone numbers.
In the desktop view, find <strong>LABCOL.v7.ps1</strong> file,
right-click on it and select “<strong>Run with
PowerShell</strong>”.</p></li>
</ul>
<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 42" class="screenshot-link" href="assets/images/image42.png"><img alt="Lab guide screenshot 42" class="lab-screenshot" height="292" loading="lazy" src="assets/images/image42.png" width="782"/></a></figure>
<ul>
<li><p>Verify that your lab is on RTP or SJC Data Center if <strong>Main
number</strong> field still has no value after you ran the PowerShell
script above. You can schedule another lab just in case the lab
automation has not run properly.</p></li>
</ul></aside>
## Step 4: Create Office Hours Schedule {#step-4-create-office-hours-schedule}
<p>Scheduling supports various calling features, such as auto
attendants, by defining time slots during which specific behaviors are
executed.</p>
<p>At least one schedule for Business Hours needs to be created for this
lab.</p>
<p>From Control Hub portal, under Management, click on “Locations”, then
select the location where the schedule will be created.</p>

<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 43" class="screenshot-link" href="assets/images/image43.png"><img alt="Lab guide screenshot 43" class="lab-screenshot" height="496" loading="lazy" src="assets/images/image43.png" width="1791"/></a></figure>
<p>Click on “Calling” tab &gt; Scroll to “Calling features setting” &gt;
click “Schedules”.</p>
<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 44" class="screenshot-link" href="assets/images/image44.png"><img alt="Lab guide screenshot 44" class="lab-screenshot" height="746" loading="lazy" src="assets/images/image44.png" width="968"/></a></figure>
<p>Click on “Add schedule”</p>
<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 45" class="screenshot-link" href="assets/images/image45.png"><img alt="Lab guide screenshot 45" class="lab-screenshot" height="893" loading="lazy" src="assets/images/image45.png" width="1617"/></a></figure>

<div class="instruction-panel"><div><p>For the schedule name enter “<strong>OfficeHours</strong>”,
Schedule type “Business Hours”</p>
<ul>
<li><p>Update the hours of operation to “12:00 AM to 5:00 PM” for Monday
through Friday to accommodate the time difference between Amsterdam and
the US, where this lab is hosted.</p></li>
<li><p>Uncheck: Sunday, Saturday and Lunch</p></li>
<li><p>Click on “<strong>Save</strong>” when done with the schedule
entry</p></li>
</ul></div><div><a aria-label="Enlarge Lab guide screenshot 46" class="screenshot-link" href="assets/images/image46.png"><img alt="Lab guide screenshot 46" class="lab-screenshot" height="1712" loading="lazy" src="assets/images/image46.png" width="1444"/></a></div></div>

<p>Next screen will show that “OfficeHours” schedule has been added.</p>

<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 47" class="screenshot-link" href="assets/images/image47.png"><img alt="Lab guide screenshot 47" class="lab-screenshot" height="252" loading="lazy" src="assets/images/image47.png" width="616"/></a></figure>
## Step 5: Validate Customer Assist License Availability {#step-5-validate-customer-assist-license-availability}
<p>In this section, you will be verifying license availability for Webex
Calling Customer Assist. Under Management, click on “Account” &gt; click
on “Subscriptions” tab. In the License Summary section, verify Customer
Assist license availability.</p>
<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 48" class="screenshot-link" href="assets/images/image48.png"><img alt="Lab guide screenshot 48" class="lab-screenshot" height="1091" loading="lazy" src="assets/images/image48.png" width="1125"/></a></figure>
<aside class="lab-note" role="note"><p><strong>Note:</strong></p>
<p>License assignment is listed in xx/yy format.</p>
<ul>
<li><p>xx = license assigned to users or workstation</p></li>
<li><p>yy = total available license per your order</p></li>
</ul></aside>
## Step 6: Assign Customer Assist License to agents and supervisor {#step-6-assign-customer-assist-license-to-agents-and-supervisor}
<p>Each agent and supervisor will need to be assigned a Customer Assist
license. In this lab we will add this license to the following users:
Anita Perez, Kellie Melby and Taylor Bard.</p>
<p>From Control Hub portal, under Management, click on “User”, then
select the user that need to be assigned Customer Assist license.</p>
<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 49" class="screenshot-link" href="assets/images/image49.png"><img alt="Lab guide screenshot 49" class="lab-screenshot" height="506" loading="lazy" src="assets/images/image49.png" width="848"/></a></figure>
<p>Let’s start with Anita Perez by clicking on that user. In the
“Summary” tab, scroll down and search for “Licenses” section. This user
currently has Calling license assigned.</p>
<p>Click on the “<strong>Edit Licenses</strong>” icon to start adding
“Customer Assist” license:</p>
<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 50" class="screenshot-link" href="assets/images/image50.png"><img alt="Lab guide screenshot 50" class="lab-screenshot" height="400" loading="lazy" src="assets/images/image50.png" width="880"/></a></figure>
<p>Click one more time on the “<strong>Edit Licenses</strong>” icon in
the next license summary screen:</p>
<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 51" class="screenshot-link" href="assets/images/image51.png"><img alt="Lab guide screenshot 51" class="lab-screenshot" height="1056" loading="lazy" src="assets/images/image51.png" width="1694"/></a></figure>
<p>Click Customer Assist from the left-side menu.
<strong>Checked</strong> the Customer Assist checkbox and click
Save.</p>
<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 52" class="screenshot-link" href="assets/images/image52.png"><img alt="Lab guide screenshot 52" class="lab-screenshot" height="784" loading="lazy" src="assets/images/image52.png" width="1278"/></a></figure>
<p>Once the License assignment is successful, you can click Close in the
bottom of the window.</p>
<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 53" class="screenshot-link" href="assets/images/image53.png"><img alt="Lab guide screenshot 53" class="lab-screenshot" height="384" loading="lazy" src="assets/images/image53.png" width="616"/></a></figure>
<aside class="lab-note" role="note"><p><strong>Note:</strong></p>
<p>Once the Customer Assist license is assigned, you may notice that the
Webex Calling Professional license is unassigned. Webex Calling is
already included as part of the Customer Assist license.</p></aside>
<p><strong>Repeat</strong> the above steps for the following users:</p>
<p>- Kellie Melby</p>
<p>- Taylor Bard</p>
## Step 7: Download CSV Result Files from Migrate Features from UCM Tool {#step-7-download-csv-result-files-from-migrate-features-from-ucm-tool}
<p>Go back to the Migration utilities under Control Hub &gt; Services
&gt; Updates &amp; Migrations &gt; <strong>Migrate features from UCM
utility</strong>, by now the staging process should have been
finished.</p>
<p>Click <strong>Get Started</strong> on the “Migrate features from
UCM”</p>
<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 54" class="screenshot-link" href="assets/images/image54.png"><img alt="Lab guide screenshot 54" class="lab-screenshot" height="238" loading="lazy" src="assets/images/image54.png" width="836"/></a></figure>
<p>In the next screen, you would see message indicating Unified
Communications Manager tar file has been uploaded successfully.</p>
<p>Click on “Actions” and then “Export CSV”</p>
<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 55" class="screenshot-link" href="assets/images/image55.png"><img alt="Lab guide screenshot 55" class="lab-screenshot" height="442" loading="lazy" src="assets/images/image55.png" width="964"/></a></figure>
<p>Select a folder to download the CSV. You can put it in the LABCOL
&gt; CUCM folder.</p>
<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 56" class="screenshot-link" href="assets/images/image56.png"><img alt="Lab guide screenshot 56" class="lab-screenshot" height="277" loading="lazy" src="assets/images/image56.png" width="860"/></a></figure>
<p>Click “Done” after the file download is completed.</p>
<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 57" class="screenshot-link" href="assets/images/image57.png"><img alt="Lab guide screenshot 57" class="lab-screenshot" height="283" loading="lazy" src="assets/images/image57.png" width="612"/></a></figure>
<p>Right-click on the downloaded file inside folder “Walk-In-Lab &gt;
LABCOL &gt; CUCM”, select “Extract All”</p>
<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 58" class="screenshot-link" href="assets/images/image58.png"><img alt="Lab guide screenshot 58" class="lab-screenshot" height="232" loading="lazy" src="assets/images/image58.png" width="612"/></a></figure>
<p>Accept the default folder to extract the file and the click
“Extract”. Note the folder location for later.</p>
<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 59" class="screenshot-link" href="assets/images/image59.png"><img alt="Lab guide screenshot 59" class="lab-screenshot" height="1174" loading="lazy" src="assets/images/image59.png" width="2472"/></a></figure>
<p>We will use the following two csv files for this lab:</p>
<ul>
<li><p><strong>AutoAttendantBulk.csv</strong>: bulk configure Auto
Attendant in Control Hub</p></li>
<li><p><strong>CallQueueBulk.csv</strong>: bulk configure Call Queue in
Control Hub</p></li>
</ul>
<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 60" class="screenshot-link" href="assets/images/image60.png"><img alt="Lab guide screenshot 60" class="lab-screenshot" height="242" loading="lazy" src="assets/images/image60.png" width="904"/></a></figure>
