# Bulk import Auto Attendant {#task-6-bulk-import-auto-attendant-5-minutes}

<div class="page-meta">LABCOL-2883 <span>Task 6</span><span>5 minutes</span></div>
<p>In this lab, some edits need to be done on the bulk csv result to map
to the correct Webex Calling configuration.</p>
<p>Open the “<strong>AutoAttendantBulk.csv</strong>” file in MS
Excel.</p>
<p>Follow the table below to update the values of specific cells in the
csv file – <strong>values are case sensitive</strong>.</p>
<div aria-label="Lab reference table" class="table-scroll" role="region" tabindex="0"><table>

<thead>
<tr>
<th>Excel Cell #</th>
<th>Header Name</th>
<th>Original Value</th>
<th>Replacement Value</th>
</tr>
</thead>
<tbody>
<tr>
<td>B2</td>
<td>Phone Number</td>
<td>6500</td>
<td>&lt;blank&gt; (delete 6500)</td>
</tr>
<tr>
<td>C2</td>
<td>Extension</td>
<td>&lt;blank&gt;</td>
<td>6500</td>
</tr>
<tr>
<td>D2</td>
<td>Location</td>
<td>Error….</td>
<td>dCloud</td>
</tr>
<tr>
<td>F2</td>
<td>Language Code</td>
<td>Error….</td>
<td>en_us</td>
</tr>
<tr>
<td>J2</td>
<td>Business Schedule</td>
<td>All Hours Error..</td>
<td>OfficeHours</td>
</tr>
<tr>
<td>Q2</td>
<td>Business Hours Greeting Type</td>
<td>&lt;blank&gt;</td>
<td>CUSTOM</td>
</tr>
<tr>
<td>R2</td>
<td>Business Hours Announcement Name</td>
<td><p>SupportDeskIVR_GREETING_STANDARD.WAV</p>
<p>Error: The greetings file cannot be found in WxC</p></td>
<td>SupportDeskIVR_GREETING_STANDARD.WAV</td>
</tr>
<tr>
<td>S2</td>
<td>Business Hours Announcement Media Type</td>
<td>&lt;blank&gt;</td>
<td>WAV</td>
</tr>
<tr>
<td>T2</td>
<td>Business Hours Announcement Level</td>
<td>&lt;blank&gt;</td>
<td>ORGANIZATION</td>
</tr>
<tr>
<td>AZ2</td>
<td>Business Hours Press 9 Description</td>
<td>&lt;blank&gt;</td>
<td>Restart Greeting</td>
</tr>
</tbody>
</table></div>
<aside class="lab-note" role="note"><p><strong>Note:</strong></p>
<ul>
<li><p>Since this is a small lab without a complete dial-plan
configuration (e.g., no PSTN numbers, no inter-site dial prefixes, and
no preloaded greeting audio files), the Migrate Feature from the UCM
tool is unable to map to the correct Webex Calling location or recognize
the location name, language, or greeting file. As a result, the
adjustments outlined above are necessary.</p></li>
<li><p>If announcement greeting files are uploaded at the organization
level <strong>before</strong> running the "Migrate Features from UCM
Tool" then the AutoAttendantBulk.csv will automatically map fields Q2,
R2, S2, and T2 to the correct values and do not need manual update as
outlined above — provided the same WAV files are used.</p></li>
</ul></aside>
<p>Once all fields are updated, <strong>close</strong> the file to save
and click “Yes” for any dialog prompts.</p>
<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 61" class="screenshot-link" href="assets/images/image61.png"><img alt="Lab guide screenshot 61" class="lab-screenshot" height="326" loading="lazy" src="assets/images/image61.png" width="904"/></a></figure>
<p>Go to Control Hub, click Calling -&gt; Features -&gt; Auto Attendant
-&gt; “Add New”</p>
<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 62" class="screenshot-link" href="assets/images/image62.png"><img alt="Lab guide screenshot 62" class="lab-screenshot" height="586" loading="lazy" src="assets/images/image62.png" width="1828"/></a></figure>
<p>Click “Open the bulk editor” in Create Auto Attendant section.</p>
<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 63" class="screenshot-link" href="assets/images/image63.png"><img alt="Lab guide screenshot 63" class="lab-screenshot" height="919" loading="lazy" src="assets/images/image63.png" width="1403"/></a></figure>
<p>Upload the file that we just edited
“<strong>AutoAttendantBulk.csv</strong>” by drag-and-drop or click on
“Choose a file” and then click “Upload”.</p>
<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 64" class="screenshot-link" href="assets/images/image64.png"><img alt="Lab guide screenshot 64" class="lab-screenshot" height="927" loading="lazy" src="assets/images/image64.png" width="1223"/></a></figure>
<p>After a successful add, the “Added” field value will increment by the
number of added items in the Tasks status window. Click “Close” to
proceed.</p>
<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 65" class="screenshot-link" href="assets/images/image65.png"><img alt="Lab guide screenshot 65" class="lab-screenshot" height="314" loading="lazy" src="assets/images/image65.png" width="904"/></a></figure>
<p>You can go back to the Calling &gt; Features &gt; Auto Attendant &gt;
Manage, to see the recently added Auto Attendant named “SupportDeskIVR”
with extension 6500.</p>
<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 66" class="screenshot-link" href="assets/images/image66.png"><img alt="Lab guide screenshot 66" class="lab-screenshot" height="746" loading="lazy" src="assets/images/image66.png" width="1878"/></a></figure>
<div class="instruction-panel icon-note"><div><img alt="Lab guide control icon 1" class="inline-control" height="26" loading="lazy" src="assets/images/image1.png" width="20"/></div><div><ul>
<li><p>Webex Calling Auto Attendant disconnects a call after 10 seconds
of no key press following the greeting. To adjust this inactivity timer
or set the greeting to repeat, configure the settings in the Auto
Attendant Menu configuration:</p>
<ol type="1">
<li><p>Calling &gt; Features &gt; Auto Attendant &gt; Manage &gt; Select
“Menu” in “Business Hours Auto Attendant”</p></li>
</ol></li>
</ul>
<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 67" class="screenshot-link" href="assets/images/image67.png"><img alt="Lab guide screenshot 67" class="lab-screenshot" height="495" loading="lazy" src="assets/images/image67.png" width="897"/></a></figure>
<ol start="2" type="1">
<li><p>Change the setting in “Menu timeout and repeat configuration” as
follow:</p></li>
</ol>
<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 68" class="screenshot-link" href="assets/images/image68.png"><img alt="Lab guide screenshot 68" class="lab-screenshot" height="541" loading="lazy" src="assets/images/image68.png" width="728"/></a></figure>
<p><a href="https://help.webex.com/en-us/article/nsioxoi/Manage-auto-attendants">https://help.webex.com/en-us/article/nsioxoi/Manage-auto-attendants</a></p>
</div></div>
## Using Task Status to Identify Failed Import {#using-task-status-to-identify-failed-import}
<p>In situation when the bulk failed or partial completed, you can
access Task Status directly from Control Hub top banner on the
right-hand side.</p>
<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 69" class="screenshot-link" href="assets/images/image69.png"><img alt="Lab guide screenshot 69" class="lab-screenshot" height="603" loading="lazy" src="assets/images/image69.png" width="1230"/></a></figure>
<p>The below is a sample view with a failed/error Auto Attendant bulk
add operation:</p>
<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 70" class="screenshot-link" href="assets/images/image70.png"><img alt="Lab guide screenshot 70" class="lab-screenshot" height="1038" loading="lazy" src="assets/images/image70.png" width="1382"/></a></figure>
<p>Click on the “Export errors to CSV” to find out details of the error.
Download the “errors.csv” and open it Excel. The below is sample error
for undefined PSTN Webex Number.</p>
<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 71" class="screenshot-link" href="assets/images/image71.png"><img alt="Lab guide screenshot 71" class="lab-screenshot" height="59" loading="lazy" src="assets/images/image71.png" width="727"/></a></figure>
<aside class="lab-note" role="note"><p><strong>Note:</strong></p>
<p>If the Auto Attendant (AA) is configured to use a PSTN number, ensure
that this number is added to the relevant location(s) first before
proceeding to add the AA with bulk editor.</p></aside>
