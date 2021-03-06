/* 
* This file is part of min.
* 
* min is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
* 
* min is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
* 
* You should have received a copy of the GNU General Public License
* along with min.  If not, see <http://www.gnu.org/licenses/>.
* 
* Copyright (C) 2011-2014 Richard Pospesel, Kevin Hart, Lei Hu, Siyu Zhu, David Stalnaker,
* Christopher Sasarak, Robert LiVolsi, Awelemdy Orakwue, and Richard Zanibbi
* (Document and Pattern Recognition Lab, RIT) 
*/
/* 
	This file defines the interface for Segments.
	The interface for all elements in the expression (image, stroke, text, etc)
*/
Segment.count = 0;
Segment.set_count = 0;
Segment.chalk_layer = true; // Whether or not this segment belongs to the chalk layer
Segment.last_id = 0;
function Segment()
{
    // identifiers to build unique id
    this.type_id;    // unique per class
    this.instance_id; // unique per object
    this.set_id;    // unique per 'set' of segments
    this.chalk_layer;
    
    // position information
    // top left hand corner of segment
    this.position;
    // width and height
    this.size;
    // the layer we are in, 0 is bottom N is top
    this.layer;
    // our axis aligned bounding box
    this.aabb;
    // the element this object contains, e.g. for Penstrokes and ImageBlobs this is an SVG.
    this.element;
}

Segment.next_set_id = function()
{
	// Many operations create "new" sets, both to create new segments, as well
	// as change attributes (e.g. symbol label/classification) of a given segment.
	// To avoid problems when data gets large, we are now book-keeping these ids
	// in the Segment class, and using a method to get the nextSetId.
	Segment.set_count++;
	while ( RecognitionManager.getRecognition( Segment.last_id ) != null )
		Segment.last_id++;

	return Segment.last_id;
}

// just draw to canvas using the given context
Segment.prototype.render = function(in_context)
{
    
}

// clears this segment
Segment.prototype.clear = function(in_context)
{

}

// draw method for when the segment is selected
Segment.prototype.render_selected = function(in_context)
{

}

// determine if the passed in point (screen space) collides with our geometery
Segment.prototype.point_collides = function(in_position)
{
    return false;
}

Segment.prototype.line_collides = function(point_a, point_b)
{
    return false;
}

// translate by this amount (Vector2)
Segment.prototype.translate = function(in_offset)
{

}

// resize a segment 
// origin - stationary point of parent group or set
// offset - distance mouse moved
Segment.prototype.resize = function(in_origin, in_scale)
{

}

Segment.prototype.freeze_transform = function()
{

}

Segment.unique_id = function(in_Segment)
{
    // type id will fill the top 8 bits, instance id will fill bottom 24
    if(in_Segment == null)
        return -1;
    return ((in_Segment.type_id << 24) + in_Segment.instance_id);
}

Segment.toXML = function()
{
    return "<Segment type=\"default\"/>";
}

Segment.parseXML = function(in_xml)
{
    
}
