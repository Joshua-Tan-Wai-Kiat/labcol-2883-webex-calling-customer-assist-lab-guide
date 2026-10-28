# Bulk import Call Queues {#task-7-bulk-import-call-queues-5-minutes}

<div class="page-meta">LABCOL-2883 <span>Task 7</span><span>5 minutes</span></div>
<p>Some edits need to be done on the bulk csv result to map to the
correct Webex Calling configuration.</p>
<p>Open the “<strong>CallQueueBulk.csv</strong>” file in MS Excel.</p>
<p>Follow the table below to update the values of specific cells in the
csv file.</p>
<div aria-label="Lab reference table" class="table-scroll" role="region" tabindex="0"><table>

<thead>
<tr>
<th>Queue Name</th>
<th>Excel Cell #</th>
<th>Header Name</th>
<th>Original Value</th>
<th>Replacement Value</th>
</tr>
</thead>
<tbody>
<tr>
<td rowspan="5">Q1_WebexCallingSupport</td>
<td>B2</td>
<td>Phone Number</td>
<td>6501</td>
<td>&lt;blank&gt; (delete 6501)</td>
</tr>
<tr>
<td>C2</td>
<td>Extension</td>
<td>Empty</td>
<td>6501</td>
</tr>
<tr>
<td>D2</td>
<td>Location</td>
<td>Error….</td>
<td>dCloud</td>
</tr>
<tr>
<td>I2</td>
<td>Language</td>
<td>Error….</td>
<td>en_us</td>
</tr>
<tr>
<td>J2</td>
<td>Timezone</td>
<td>Error….</td>
<td>America/Los_Angeles</td>
</tr>
<tr>
<td rowspan="5">Q2_WebexContactCenterSupport</td>
<td>B3</td>
<td>Phone Number</td>
<td>6502</td>
<td>&lt;blank&gt; (delete 6502)</td>
</tr>
<tr>
<td>C3</td>
<td>Extension</td>
<td>Empty</td>
<td>6502</td>
</tr>
<tr>
<td>D3</td>
<td>Location</td>
<td>Error….</td>
<td>dCloud</td>
</tr>
<tr>
<td>I3</td>
<td>Language</td>
<td>Error….</td>
<td>en_us</td>
</tr>
<tr>
<td>J3</td>
<td>Timezone</td>
<td>Error….</td>
<td>America/Los_Angeles</td>
</tr>
</tbody>
</table></div>
<aside class="lab-note" role="note"><p><strong>Note:</strong></p>
<p>Since this is a small lab without a complete dial-plan configuration
(e.g., no PSTN numbers, no inter-site dial prefixes, and no preloaded
greeting audio files), the Migrate Feature from the UCM tool is unable
to map to the correct Webex Calling location or recognize the location
name, language, or greeting file. As a result, the adjustments outlined
above are necessary.</p></aside>
<p>Once all the fields updated, close Excel by choosing: File &gt;
Close.</p>
<p>Save the file and click “<strong>Save</strong>” for the prompt
below.</p>
<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 72" class="screenshot-link" href="assets/images/image72.png"><img alt="Lab guide screenshot 72" class="lab-screenshot" height="117" loading="lazy" src="assets/images/image72.png" width="368"/></a></figure>
<p>Finally, select “<strong>Yes</strong>” when prompted to save the file
in CSV format.</p>
<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 73" class="screenshot-link" href="assets/images/image73.png"><img alt="Lab guide screenshot 73" class="lab-screenshot" height="196" loading="lazy" src="assets/images/image73.png" width="904"/></a></figure>
<div class="instruction-panel"><div><ol type="1">
<li><p>Customer Assist configuration section is under: Services &gt;
Customer Assist</p></li>
<li><p>It will show 3 licenses (out of 50) already assigned for the
three calling users previously configured.</p></li>
<li><p>Next is to upload Call Queue <strong>csv</strong> file by
selecting “Queues” tab in the top menu bar</p></li>
</ol></div><div><a aria-label="Enlarge Lab guide screenshot 74" class="screenshot-link" href="assets/images/image74.png"><img alt="Lab guide screenshot 74" class="lab-screenshot" height="2064" loading="lazy" src="assets/images/image74.png" width="1828"/></a></div></div>
<p>Click on “Bulk Manage”.</p>
<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 75" class="screenshot-link" href="assets/images/image75.png"><img alt="Lab guide screenshot 75" class="lab-screenshot" height="1410" loading="lazy" src="assets/images/image75.png" width="2340"/></a></figure>
<p>Upload the file that we just edited
“<strong>CallQueueBulk.csv</strong>” by drag-and-drop or click on
“Choose a file”.</p>
<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 76" class="screenshot-link" href="assets/images/image76.png"><img alt="Lab guide screenshot 76" class="lab-screenshot" height="1510" loading="lazy" src="assets/images/image76.png" width="2352"/></a></figure>
<p>Click “Upload” to start the bulk add for Call Queues.</p>
<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 77" class="screenshot-link" href="assets/images/image77.png"><img alt="Lab guide screenshot 77" class="lab-screenshot" height="1276" loading="lazy" src="assets/images/image77.png" width="1984"/></a></figure>
<p>You should see the status 2 Queues were added.</p>
<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 78" class="screenshot-link" href="assets/images/image78.png"><img alt="Lab guide screenshot 78" class="lab-screenshot" height="786" loading="lazy" src="assets/images/image78.png" width="1828"/></a></figure>
<p>Close the window to go back to Queues, showing 6501 and 6502 were
added.</p>
<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 79" class="screenshot-link" href="assets/images/image79.png"><img alt="Lab guide screenshot 79" class="lab-screenshot" height="826" loading="lazy" src="assets/images/image79.png" width="2166"/></a></figure>
<p>You can refer to this table for the agents and supervisor
assignments.</p>
<div aria-label="Lab reference table" class="table-scroll" role="region" tabindex="0"><table>

<thead>
<tr>
<th>User</th>
<th>User Extension</th>
<th>Queue</th>
<th>Queue Extension</th>
<th>Role</th>
</tr>
</thead>
<tbody>
<tr>
<td>Anita Perez</td>
<td>6017</td>
<td>Q1_WebexCallingSupport</td>
<td>6501</td>
<td>Agent</td>
</tr>
<tr>
<td>Kellie Melby</td>
<td>6050</td>
<td>Q1_WebexCallingSupport</td>
<td>6501</td>
<td>Agent</td>
</tr>
<tr>
<td>Taylor Bard</td>
<td>6026</td>
<td>Q1_WebexCallingSupport<br/>
Q2_WebexContactCenterSupport</td>
<td>6501<br/>
6502</td>
<td>Supervisor</td>
</tr>
</tbody>
</table></div>
<p><strong>Option 1 to verify agents’ assignments:</strong></p>
<p>Go to “<strong>Q1_WebexCallingSupport</strong>” queue, click “Agents”
in the overview section.</p>
<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 80" class="screenshot-link" href="assets/images/image80.png"><img alt="Lab guide screenshot 80" class="lab-screenshot" height="996" loading="lazy" src="assets/images/image80.png" width="2376"/></a></figure>
<p>You would see “Anita Perez” and “Kellie Melby” are already assigned
as agents, this configuration was imported from the Unified
Communications Manager Hunt Pilot Queue data export.</p>
<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 81" class="screenshot-link" href="assets/images/image81.png"><img alt="Lab guide screenshot 81" class="lab-screenshot" height="868" loading="lazy" src="assets/images/image81.png" width="2122"/></a></figure>
<p>Repeat the same steps to view
“<strong>Q2_WebexContactCenterSupport</strong>” Agents configuration you
would see “Taylor Bard” as an assigned Agent.</p>
<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 82" class="screenshot-link" href="assets/images/image82.png"><img alt="Lab guide screenshot 82" class="lab-screenshot" height="984" loading="lazy" src="assets/images/image82.png" width="2122"/></a></figure>
<p><strong>Option 2 to verify agents’ assignments:</strong></p>
<p>From Customer Assist dashboard, click “Agents” to see all agents
defined in all Call Queues. You can click on “&gt;” to the left of the
agent name to see more detail.</p>
<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 83" class="screenshot-link" href="assets/images/image83.png"><img alt="Lab guide screenshot 83" class="lab-screenshot" height="1144" loading="lazy" src="assets/images/image83.png" width="3490"/></a></figure>
## Using Task Status to Identify Failed Import {#using-task-status-to-identify-failed-import-1}
<p>You can use “<strong>Task Status</strong>” as shown in Task 6 to
check status of past bulk add for Auto Attendant and Call Queues.</p>
<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 84" class="screenshot-link" href="assets/images/image84.png"><img alt="Lab guide screenshot 84" class="lab-screenshot" height="539" loading="lazy" src="assets/images/image84.png" width="1399"/></a></figure>
